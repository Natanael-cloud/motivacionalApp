import React, { useState } from 'react'; // Importa React e o hook useState para gerenciamento de estado.
import QuoteDisplay from './QuoteDisplay'; // Importa o componente que exibe as frases motivacionais.
import './App.css'; // Importa o arquivo de estilos.
import logo from './assets/logo.png'; // Importa a logo do app.

const App = () => {
  // Array com frases motivacionais.
  const quotes = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite que você pode, e você estará no meio do caminho.",
    "A força não vem da capacidade física, vem de uma vontade inabalável.",
    "Você nunca é velho demais para definir outro objetivo ou sonhar um novo sonho.",
    "Seja a mudança que você deseja ver no mundo.",
    "Tudo o que você sempre quis está do outro lado do medo.",
    "A persistência é o caminho do êxito.",
    "Acredite em si mesmo e tudo será possível.",
    "Fracassos são apenas oportunidades para começar novamente com mais experiência.",
    "O único limite para o nosso amanhã são as dúvidas de hoje.",
    "O importante não é vencer todos os dias, mas lutar sempre.",
    "Sonhe grande, trabalhe duro e nunca desista.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
    "Grandes realizações requerem grandes ambições.",
    "Quando tudo parecer estar contra você, lembre-se de que o avião decola contra o vento, não a favor.",
    "Você é mais forte do que pensa, mais capaz do que imagina e mais amado do que acredita.",
    "Confie no processo. Pequenos passos levam a grandes distâncias.",
    "Se você pode sonhar, você pode realizar.",
    "Não importa o quão devagar você vá, desde que não pare.",
    "A vida é 10% o que acontece com você e 90% como você reage.",
    "Acredite no poder do agora. Hoje é o seu dia.",
    "Nunca desista de algo que você realmente quer. É difícil esperar, mas pior é se arrepender.",
    "Você não precisa ser perfeito para começar, mas precisa começar para ser perfeito.",
    "Não espere por inspiração. Comece, e a inspiração virá.",
    "A jornada de mil milhas começa com um único passo.",
    "Mude seus pensamentos e você mudará seu mundo.",
    "É na dificuldade que encontramos nossa força.",
    "Suas ações de hoje determinam o sucesso de amanhã.",
    "As melhores vistas vêm depois das subidas mais difíceis."
  ];

  // useState para armazenar a frase atual que será exibida.
  const [quote, setQuote] = useState("");

  // Função para gerar uma frase aleatória do array.
  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Gera um índice aleatório.
    setQuote(quotes[randomIndex]); // Atualiza o estado com a frase correspondente.
  };

  // Renderização do componente principal.
  return (
    <div className="app">
      {/* Exibe a logo do aplicativo */}
      <img src={logo} alt="App Logo" className="app-logo" />
      
      {/* Título do aplicativo */}
      <h1>Frases Motivacionais</h1>
      
      {/* Componente que exibe a frase; o texto é passado como prop */}
      <QuoteDisplay quote={quote} />
      
      {/* Botão para gerar uma nova frase */}
      <button onClick={generateQuote}>Nova Frase</button>
    </div>
  );
};

export default App; // Exporta o componente principal para uso no projeto.
