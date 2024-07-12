import React, { useRef } from 'react';
import '../App.css';

function Formulario() {
  const entradaRef = useRef(null);

  const handleLimpar = () => {
    entradaRef.current.value = '';
  };

  return (
    <div className="container">
      <h1 className="titulo">Digite seu nome no campo abaixo!</h1>
      <input ref={entradaRef} type="text" placeholder="Digite algo..." className="entrada" />
      <button onClick={handleLimpar} className="botao">Limpar</button>
    </div>
  );
}

export default Formulario;
