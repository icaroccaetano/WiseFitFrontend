'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export default function FormularioCutting() {
  const [formData, setFormData] = useState({
    peso: '',
    altura: '',
    idade: '',
    genero: 'masculino',
    nivel_atividade: 'moderado',
    deficit: '',
  });

  const [status, setStatus] = useState('');
  const [result, setResult] = useState<string | null>(null);

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
      const response = await fetch('http://127.0.0.1:8000/cuttingcalories/', {
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
      setResult(data.calorias);
      setStatus('');

    } catch (error: any) {
      setStatus(error.message);
    }
  };

  return (
    <Card title="Cálculo de Calorias (Cutting)">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Peso (Kg)"
            type="number"
            name="peso"
            value={formData.peso}
            step="0.1"
            onChange={handleChange}
            required
          />
          <Input
            label="Altura (cm)"
            type="number"
            name="altura"
            value={formData.altura}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Idade"
            type="number"
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            required
          />
          <Input
            label="Gênero"
            as="select"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            options={[
              { value: 'masculino', label: 'Masculino' },
              { value: 'feminino', label: 'Feminino' }
            ]}
          />
        </div>

        <Input
          label="Nível de atividade física"
          as="select"
          name="nivel_atividade"
          value={formData.nivel_atividade}
          onChange={handleChange}
          options={[
            { value: 'sedentario', label: 'Sedentário' },
            { value: 'leve', label: 'Leve' },
            { value: 'moderado', label: 'Moderado' },
            { value: 'intenso', label: 'Intenso' },
            { value: 'muito_intenso', label: 'Muito Intenso' }
          ]}
        />

        <Input
          label="Déficit Calórico (%)"
          type="number"
          name="deficit"
          value={formData.deficit}
          onChange={handleChange}
          required
          placeholder="Entre 5 e 50"
          min="5"
          max="50"
        />

        <Button type="submit" fullWidth disabled={status === 'Calculando...'}>
          {status === 'Calculando...' ? 'Calculando...' : 'Calcular'}
        </Button>

        {status && status !== 'Calculando...' && (
          <p className="text-center text-red-500 mt-4">{status}</p>
        )}

        {result && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center border border-gray-200">
            <h3 className="text-2xl font-bold text-[#32b821] mb-4">SEU RESULTADO</h3>
            <p className="text-lg text-gray-700 mb-2">
              Para seu objetivo de cutting, sua meta diária é:
            </p>
            <strong className="text-4xl text-[#071A52] block">
              {result} kcal
            </strong>
          </div>
        )}
      </form>
    </Card>
  );
}