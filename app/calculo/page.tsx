'use client';
import FormularioCutting from '@/components/FormularioCutting'
import Image from 'next/image';


export default function CalculoCaloriasPage() {
  return (
     <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: '#32b821ff', fontSize: '2.5rem' }}>
        WiseFit
      </h1>
      
      <p style={{ color: '#2b21b8ff', fontSize: '1.2rem' }}>
        Cálculo de calorias
      </p>
      
      <FormularioCutting />

       <Image
            src="/wisefit-logo.png" // O caminho começa com '/' e se refere à pasta 'public'
            alt="Logotipo do WiseFit"
            width={200} // É obrigatório definir a largura
            height={150} // E a altura, para evitar que a página "pule" enquanto a imagem carrega
            style={{ textAlign: 'center' }}
            />
     
    </main>
  );
}
