import React from "react";
import styled from "styled-components"


const Inicial = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
  margin-top: 100px;
  margin-right:20%;
  margin-left:20%;


  button {
    padding: 72px;

  }

  span {
    font-size: 32px;

  }
`


export default class PaginaPrincipal extends React.Component {
  render() {
    return (
      <Inicial>
        <button onClick={this.props.irParaCriarPL}><span>Criar Playlist</span></button>
        <button onClick={this.props.irParaVerPL}><span>Ver Playlists</span></button>
      </Inicial>
    );
  }
}
