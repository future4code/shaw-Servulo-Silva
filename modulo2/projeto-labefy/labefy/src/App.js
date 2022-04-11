import React from "react";
import styled from 'styled-components'
import PaginaPrincipal from "./pages/PaginaPrincipal/PaginaPrincipal";
import CriarPlaylists from "./pages/CriarPlaylist/CriarPlaylist";
import VerPlaylists from "./pages/VerPlaylists/VerPlaylists";
import VerDetalhesDaPlaylist from "./pages/VerDetalhesDaPlaylist/VerDetalhesDaPlaylist"
import Header from "./components/Header";

const MainContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0;
height: 97vh;
box-sizing: border-box;
padding: 0;
border: 1px solid black;
background: #e0dad6;
`
const Content = styled.div`
  /* display: flex;
  flex-direction: column;
  flex-grow: 1; */
`


// Início da class do App - Página Principal
export default class App extends React.Component {
  state = {
    paginaAtual: "principal",
    idDaPlaylist: "",
  }

  selecionarPagina = () => {
    switch (this.state.paginaAtual) {
      case "principal":
        return <PaginaPrincipal 
        irParaVerPL = {this.irParaVerPL} 
        irParaCriarPL = {this.irParaCriarPL}/>
      case "criarPL":
        return <CriarPlaylists
        irParaPrincipal = {this.irParaPrincipal}
        irParaDetalhesPL = {this.irParaDetalhesPL}
        />
      case "verPL":
        return <VerPlaylists irParaDetalhesPL = {this.irParaDetalhesPL} irParaPrincipal = {this.irParaPrincipal}/>
      case "detalhe":
        return <VerDetalhesDaPlaylist irParaPrincipal = {this.irParaPrincipal} irParaVerPL = {this.irParaVerPL} id = {this.state.idDaPlaylist}/>
      default:
        return <PaginaPrincipal/>
    }
  }
  
  irParaDetalhesPL = (id) => {
    this.setState({paginaAtual: "detalhe", idDaPlaylist: id})  
  }

  irParaPrincipal = () => {
    this.setState({paginaAtual: "principal", idDaPlaylist: ""})
  }
  irParaCriarPL = () => {
    this.setState({paginaAtual: "criarPL"})
  }
  irParaVerPL = (id) => {
    this.setState({paginaAtual: "verPL", idDaPlaylist: ""})
  }

  render() {
    return (
      <MainContainer>
        <Header irParaPrincipal = {this.irParaPrincipal}/>
        <Content>
          {this.selecionarPagina()}
        </Content>
       
      </MainContainer>
    );
  }
}
