import React, { useState } from 'react';
import QuoteDisplay from './QuoteDisplay';
import './App.css';

const App = () => {
  const quotes = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite que você pode, e você estará no meio do caminho.",
    "A força não vem da capacidade física, vem de uma vontade inabalável.",
    "Você nunca é velho demais para definir outro objetivo ou sonhar um novo sonho.",
    "Seja a mudança que você deseja ver no mundo."
  ];

  const [quote, setQuote] = useState("");

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="app">
      <h1>Frases Motivacionais</h1>
      {/* Passamos a frase como prop para o componente */}
      <QuoteDisplay quote={quote} />
      <button onClick={generateQuote}>Nova Frase</button>
    </div>
  );
};

export default App;
