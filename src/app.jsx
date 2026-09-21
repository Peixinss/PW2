import React, { useState } from 'react';

function CartaoInput(props) {
  return (
    <div className="card my-3 p-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">Nome digitado: <strong>{props.nome}</strong></p>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Digita um nome..." 
          value={props.nome}
          onChange={props.aoDigitar}
        />
      </div>
    </div>
  );
}

function CartaoBotao(props) {
  return (
    <div className="card my-3 p-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.texto}</p>
        <button className="btn btn-primary" onClick={props.aoClicar}>
          {props.textoBotao}
        </button>
      </div>
    </div>
  );
}

function App() {
  const [nomeDigitado, setNomeDigitado] = useState("");

  function mostrarPopup() {
    alert("Pop-up acionado pelo botão!");
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Trabalho de React Props</h1>

      <h2>Exercício 1</h2>
      <CartaoInput 
        titulo="Digite o seu Nome"
        nome={nomeDigitado}
        aoDigitar={(e) => setNomeDigitado(e.target.value)}
      />

      <h2>Exercício 2</h2>
      <CartaoBotao 
        titulo="Clique para ver o Pop-up"
        texto="Clica no botão abaixo para disparar o aviso."
        textoBotao="Abrir Pop-up"
        aoClicar={mostrarPopup}
      />
    </div>
  );
}

export default App;