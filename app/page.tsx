import Link from 'next/link';
import Image from 'next/image';

const containerStyle = {
  fontFamily: 'sans-serif',
  padding: '25px',
  borderRadius: '8px',
  maxWidth: '400px',
  margin: '20px auto', // Centraliza o formulário na página
  backgroundColor: '#086972',
  boxShadow: '0 3px 3px 0 #4b4646ff',
};

const buttonStyle={
  display: 'inline-block',
  padding: '12px 24px',
  fontSize: '1rem',
  color: 'white',
  backgroundColor: '#17B978',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  textDecoration: 'none', // Importante para o link não ficar sublinhado
};

export default function Home() {
  return (
     <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '20px' }}>
      <Image
        src="/wisefit-logo.png" // O caminho começa com '/' e se refere à pasta 'public'
        alt="Logotipo do WiseFit"
        width={200} // É obrigatório definir a largura
        height={150} // E a altura, para evitar que a página "pule" enquanto a imagem carrega
        style={{ textAlign: 'right', marginLeft: '10px' }}
      />

      <div className="mt-5 mb-5">
        <p className="text-2xl font-semibold text-gray-800 text-center">
          Sua jornada de{' '}
          <span style={{color: '#17B978'}}>saúde</span>, 
          agora com mais{' '}
          <span style={{color: '#17B978'}}>inteligência</span>.
        </p>
      </div>
      
      <div className="mt-30 mb-5">
        <p className="text-2xl font-semibold text-gray-800 text-center">
          Nossa missão é usar a tecnologia em prol da saúde. Faça login para ter seu histórico. Conheça nossos serviços!
        </p>
      </div>
      <div>
        <Link href="/login" style={buttonStyle} className="ml-5 mr-5">
          Login
        </Link>

        <Link href="/calculo" style={buttonStyle} className="ml-5 mr-5">
          Cutting
        </Link>

        <Link href="/dieta" style={buttonStyle} className="ml-5 mr-5">
          Dieta
        </Link>
      </div>

        

    </main>
  );
}
