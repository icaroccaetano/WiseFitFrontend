import Image from 'next/image';

// 1. A função da página agora recebe a prop 'searchParams'.
export default function ResultadoCaloriasPage({
  searchParams,
}: {
  searchParams: { calorias?: string };
}) {
  // 2. Pegamos o valor da prop usando a mesma chave que definimos no redirecionamento.
  const caloriasResultado = searchParams.calorias;

  // 3. (Opcional, mas recomendado) Verificação para caso alguém acesse a URL diretamente sem os parâmetros.
  if (!caloriasResultado) {
    return (
      <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
        <h1>Dados não encontrados</h1>
        <p>Por favor, volte e preencha o formulário para ver seu resultado.</p>
      </main>
    );
  }

  // Se os dados existem, mostramos o resultado formatado.
  return (
    <main style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: '#32b821ff', fontSize: '2.5rem' }}>
        SEU RESULTADO
      </h1>
      
      <div style={{ marginTop: '30px', fontSize: '1.5rem', lineHeight: '1.6' }}>
        <p>
          Para seu objetivo de cutting, sua meta diária é:
          <br />
          <strong style={{ fontSize: '2.5rem', color: '#071A52' }}>
            {caloriasResultado} kcal
          </strong>
        </p>
      </div>

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