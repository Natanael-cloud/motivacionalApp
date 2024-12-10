import React from 'react';

const QuoteDisplay = ({ quote }) => {
  return (
    <p style={{ fontStyle: 'italic', fontSize: '20px', color: '#34495e', margin: '20px 0', padding: '0 20px' }}>
      {quote || "Clique no botão para gerar uma frase motivacional!"}
    </p>
  );
};

export default QuoteDisplay;
