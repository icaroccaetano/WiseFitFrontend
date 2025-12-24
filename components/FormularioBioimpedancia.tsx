'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export default function FormularioBioimpedancia() {
    const [formData, setFormData] = useState({
        altura: '',
        sexo: 'masculino',
        pescoco: '',
        cintura: '', // 'abrrifa na altura do ubigo' interpreted as waist/abdomen circumference
        quadril: '',
    });

    const [status, setStatus] = useState('');
    const [result, setResult] = useState<{ bf: string; massa_magra: string; massa_gorda: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('Calculando...');
        setResult(null);

        try {
            // Assuming endpoint based on user request description
            const response = await fetch('http://127.0.0.1:8000/bioimpedancia/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Falha ao calcular. Tente novamente.');
            }

            const data = await response.json();
            setResult({
                bf: data.bf,
                massa_magra: data.massa_magra,
                massa_gorda: data.massa_gorda,
            });
            setStatus('');

        } catch (error: any) {
            setStatus(error.message);
        }
    };

    return (
        <Card title="Cálculo de Bioimpedância">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        label="Altura (cm)"
                        type="number"
                        name="altura"
                        value={formData.altura}
                        onChange={handleChange}
                        required
                    />

                    <Input
                        label="Sexo"
                        as="select"
                        name="sexo"
                        value={formData.sexo}
                        onChange={handleChange}
                        options={[
                            { value: 'masculino', label: 'Masculino' },
                            { value: 'feminino', label: 'Feminino' }
                        ]}
                    />
                </div>

                <Input
                    label="Circunferência do Pescoço (cm)"
                    type="number"
                    name="pescoco"
                    value={formData.pescoco}
                    onChange={handleChange}
                    required
                />

                <Input
                    label="Circunferência Abdominal (Umbigo) (cm)"
                    type="number"
                    name="cintura"
                    value={formData.cintura}
                    onChange={handleChange}
                    required
                />

                {formData.sexo === 'feminino' && (
                    <Input
                        label="Circunferência do Quadril (cm)"
                        type="number"
                        name="quadril"
                        value={formData.quadril}
                        onChange={handleChange}
                        required
                    />
                )}

                <Button type="submit" fullWidth disabled={status === 'Calculando...'}>
                    {status === 'Calculando...' ? 'Calculando...' : 'Calcular BF%'}
                </Button>

                {status && status !== 'Calculando...' && (
                    <p className="text-center text-red-500 mt-4">{status}</p>
                )}

                {result && (
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center border border-gray-200">
                        <h3 className="text-2xl font-bold text-[#32b821] mb-4">SEU RESULTADO</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-white rounded shadow-sm">
                                <p className="text-sm text-gray-500 mb-1">Gordura Corporal</p>
                                <strong className="text-2xl text-[#071A52]">{result.bf}%</strong>
                            </div>
                            <div className="p-4 bg-white rounded shadow-sm">
                                <p className="text-sm text-gray-500 mb-1">Massa Magra</p>
                                <strong className="text-2xl text-[#071A52]">{result.massa_magra} kg</strong>
                            </div>
                            <div className="p-4 bg-white rounded shadow-sm">
                                <p className="text-sm text-gray-500 mb-1">Massa Gorda</p>
                                <strong className="text-2xl text-[#071A52]">{result.massa_gorda} kg</strong>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </Card>
    );
}
