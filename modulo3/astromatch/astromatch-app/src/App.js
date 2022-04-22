import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import TelaInicial from "./components/TelaInicial/TelaInicial";
import TelaMatches from "./components/TelaMatches/TelaMatches";

function App() {
  const [paginaAtual, setPaginaAtual] = useState("inicial")

  const irParaInicial = () => {
    setPaginaAtual("inicial")
  }
  const irParaMatches = () => {
    setPaginaAtual("matches")
  }

  const escolherTela = () => {
    switch (paginaAtual) {
      case "inicial":
        return <TelaInicial
          irParaInicial = {irParaInicial}
          irParaMatches = {irParaMatches}
          />
        
      case "matches":
        return <TelaMatches 
          irParaInicial = {irParaInicial}
          irParaMatches = {irParaMatches}
        />;
      default:
        return <TelaInicial />;
    }
  }
  
  return (
    <div>
     {escolherTela()}
    </div>
  )
}

export default App;
