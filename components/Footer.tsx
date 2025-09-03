// components/Footer.tsx

// Estilos para o rodapé (pode ser em um arquivo CSS separado também)
const footerStyle = {
  backgroundColor: '#3c3e40ff', // Um cinza bem claro
  color: '#6c757d', // Cor do texto
  padding: '20px 40px',
  textAlign: 'center' as const, // O 'as const' ajuda o TypeScript
};

const linkStyle = {
  color: '#071A52', // Um azul escuro da sua paleta
  textDecoration: 'none',
  margin: '0 10px'
};

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Pega o ano atual dinamicamente

  return (
    <footer style={footerStyle}>
      <p>&copy; {currentYear} WiseFit.</p>
      <p>Todo o conteúdo deste site foi desenvolvido para fins de estudo e aprendizado, sem qualquer objetivo comercial.</p>
      <nav>
        <a href="/sobre" style={linkStyle}>Sobre</a>
        <a href="/contato" style={linkStyle}>Contato</a>
        <a href="/termos" style={linkStyle}>Termos de Serviço</a>
      </nav>
    </footer>
  );
}