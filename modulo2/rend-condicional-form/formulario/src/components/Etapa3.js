import React from "react";

export default class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <h3>5. Por que você não terminou um curso de graduação?</h3>
        <input></input>
        <h3>6. Você faz algum curso complementar?</h3>
        <select>
          <option>Curso técnico</option>
          <option>Curso de inglês</option>
          <option>Não fiz curso complementar</option>
        </select>
      </div>
    );
  }
}
