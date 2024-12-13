import React from 'react'; // Importa o React para criar o componente.

const QuoteDisplay = ({ quote }) => {
  // Componente funcional que recebe "quote" como prop.
  return (
    <p 
      // Aplica estilos inline para o parágrafo que exibe a frase.
      style={{ 
        fontStyle: 'italic', // Estilo da fonte em itálico para destacar o texto.
        fontSize: '20px', // Define o tamanho da fonte.
        color: '#34495e', // Cor do texto em um tom de cinza azulado.
        margin: '20px 0', // Margem superior e inferior de 20px para espaçamento.
        padding: '0 20px' // Padding horizontal de 20px para afastar o texto das bordas.
      }}
    >
      {quote || "Clique no botão para gerar uma frase motivacional!"} 
      {/* Exibe a frase passada como prop ou, se estiver vazia, uma mensagem padrão. */}
    </p>
  );
};

export default QuoteDisplay; // Exporta o componente para ser usado em outros arquivos.
