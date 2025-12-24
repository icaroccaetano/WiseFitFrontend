'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export default function FormularioMacros() {
    const [formData, setFormData] = useState({
        calorias_totais: '',
        peso: '',
        objetivo: 'manutencao',
    });

    const [status, setStatus] = useState('');
    const [result, setResult] = useState<{ proteina: string; carboidrato: string; gordura: string } | null>(null);

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
            const response = await fetch('http://127.0.0.1:8000/macros/', {
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
                proteina: data.proteina,
                carboidrato: data.carboidrato,
                gordura: data.gordura,
            });
            setStatus('');

        } catch (error: any) {
            setStatus(error.message);
        }
    };

    return (
        <Card title="Cálculo de Macros">
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Calorias Totais (Kcal)"
                    type="number"
                    name="calorias_totais"
                    value={formData.calorias_totais}
                    onChange={handleChange}
                    required
                    placeholder="Ex: 2000"
                />

                <Input
                    label="Peso (Kg)"
                    type="number"
                    name="peso"
                    value={formData.peso}
                    step="0.1"
                    onChange={handleChange}
                    required
                    placeholder="Ex: 70.5"
                />

                <Input
                    label="Objetivo"
                    as="select"
                    name="objetivo"
                    value={formData.objetivo}
                    onChange={handleChange}
                    options={[
                        { value: 'manutencao', label: 'Manutenção' },
                        { value: 'perca_peso', label: 'Perda de Peso' },
                        { value: 'ganho_massa', label: 'Ganho de Massa' }
                    ]}
                />

                <Button type="submit" fullWidth disabled={status === 'Calculando...'}>
                    {status === 'Calculando...' ? 'Calculando...' : 'Calcular Macros'}
                </Button>

                {status && status !== 'Calculando...' && (
                    <p className="text-center text-red-500 mt-4">{status}</p>
                )}

                {result && (
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center border border-gray-200">
                        <h3 className="text-2xl font-bold text-[#32b821] mb-4">SEU RESULTADO</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-white rounded shadow-sm">
                                <p className="text-sm text-gray-500 mb-1">Proteína</p>
                                <strong className="text-2xl text-[#071A52]">{result.proteina} g</strong>
                            </div>
                            <div className="p-4 bg-white rounded shadow-sm">
                                <p className="text-sm text-gray-500 mb-1">Carboidrato</p>
                                <strong className="text-2xl text-[#071A52]">{result.carboidrato} g</strong>
                            </div>
                            <div className="p-4 bg-white rounded shadow-sm">
                                <p className="text-sm text-gray-500 mb-1">Gordura</p>
                                <strong className="text-2xl text-[#071A52]">{result.gordura} g</strong>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </Card>
    );
}
