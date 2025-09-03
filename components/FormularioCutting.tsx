// components/FormularioCutting.tsx
'use client'; // Essencial, pois usaremos hooks (useState, useRouter)

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // 1. Importamos o hook para navegação

export default function FormularioCutting() {
  // 2. Inicializamos o hook do roteador
  const router = useRouter();

  // 3. Usamos um único objeto de estado para todos os campos do formulário
  const [formData, setFormData] = useState({
    peso: '',
    altura: '',
    idade: '',
    genero: 'masculino',
    nivel_atividade: 'moderado',
    deficit: '',
  });

  // Estado para feedback ao usuário (opcional, mas recomendado)
  const [status, setStatus] = useState('');

  // Função para atualizar o estado quando um campo muda
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Calculando...');

    try {
      // 4. Enviamos os dados do formulário para a nossa API
      const response = await fetch(' http://127.0.0.1:8000/cuttingcalories/', { // <-- Verifique se esta é sua rota correta
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Falha ao calcular. Tente novamente.');
      }
      
      const result = await response.json(); // Ex: { manutencao: 2500, cutting: 2000 }
      
      // 5. REDIRECIONAMENTO COM OS DADOS!
      // Usamos "Query Parameters" para passar os resultados para a próxima página.
      const queryParams = new URLSearchParams({
        calorias: result.calorias,
      }).toString();

      router.push(`/resultado?${queryParams}`);

    } catch (error: any) {
      setStatus(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      {/* Exemplo de campo: Gênero */}
      <div style={{ marginBottom: '15px', textAlign: 'left' }}>
        <label htmlFor="peso" style={{ display: 'block', marginBottom: '5px' }}>Peso (Kg):</label>
        <input type="number" name="peso" value={formData.peso} step='0.1' onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
      </div>

      <div style={{ marginBottom: '15px', textAlign: 'left' }}>
        <label htmlFor="altura" style={{ display: 'block', marginBottom: '5px' }}>Altura (cm):</label>
        <input type="number" name="altura" value={formData.altura} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
      </div>

      {/* Exemplo de campo: Idade */}
      <div style={{ marginBottom: '15px', textAlign: 'left' }}>
        <label htmlFor="idade" style={{ display: 'block', marginBottom: '5px' }}>Idade:</label>
        <input type="number" name="idade" value={formData.idade} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
      </div>

      <div style={{ marginBottom: '15px', textAlign: 'left' }}>
        <label htmlFor="genero" style={{ display: 'block', marginBottom: '5px' }}>Gênero:</label>
        <select name="genero" value={formData.genero} onChange={handleChange} style={{ width: '100%', padding: '8px' }}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px', textAlign: 'left' }}>
        <label htmlFor="nivel_atividade" style={{ display: 'block', marginBottom: '5px' }}>Nível de atividade física:</label>
        <select name="nivel_atividade" value={formData.nivel_atividade} onChange={handleChange} style={{ width: '100%', padding: '8px' }}>
          <option value="sedentario">Sedentário</option>
          <option value="leve">Leve</option>
          <option value="moderado">Moderado</option>
          <option value="intenso">Intenso</option>
          <option value="muito_intenso">Muito Intenso</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px', textAlign: 'left' }}>
      <label htmlFor="deficit" style={{ display: 'block', marginBottom: '5px' }}>
        Déficit Calórico (%):
      </label>
      <input type="number" id="deficit" name="deficit" value={formData.deficit} onChange={handleChange} required placeholder="Entre 5 e 50" min="5" max="50" style={{ width: '100%', padding: '8px' }}/>
      </div>

      <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '1rem' }}>Calcular</button>
      
      {status && <p style={{ marginTop: '15px' }}>{status}</p>}
    </form>
  );
}