import './App.css';
import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`
const Mensagem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: end;
  border: 2px solid green;
  min-height: 100vh;
  width: 450px;
  background-image: url(https://i.pinimg.com/originals/97/c0/07/97c00759d90d786d9b6096d274ad3e07.png);
  

  div{
      padding: 20px 10px;
      color: #fff;
    }

  span{
    font-weight: bolder;
    color: orange;
  }

  input{
    padding: 10px;
    margin: 5px;
  }
  `
  const Comandos = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`
 



function App() {

  class WhatsLab extends React.Component {
    state = {
      zap: [
        {
        nome:"",
        mensagem:""
        }

      ],
      valorInputNome: "",
      valorInputMensagem: ""
    }

    adicionaNovaMensagem = () => {
      const novaMensagem = {
        nome: this.state.valorInputNome,
        mensagem: this.state.valorInputMensagem
      }

      const novaMensagenS = [...this.state.zap, novaMensagem]

      this.setState({zap: novaMensagenS})
      this.setState({valorInputMensagem:""})
    }

    onChangeInputNome = (event) => {
      this.setState({ valorInputNome: event.target.value })
    }

    onChangeInputMensagem = (event) => {
      this.setState({ valorInputMensagem: event.target.value })
    }


  render() {

    const listaDeComponentes = this.state.zap.map((zaps) => {
      return (
        <div>
          <span>{zaps.nome}</span> - {zaps.mensagem}
        </div>
      )
    })

  
  
  return (

    <MainContainer>
      <Mensagem>
        <div>{listaDeComponentes}</div>
        <Comandos>
            <input
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}
            />
            <input
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
            />
            <button onClick={this.adicionaNovaMensagem}>Enviar</button>
        </Comandos>

      </Mensagem>
      

    </MainContainer>
  );
  }
  }
  return <WhatsLab/>
}

export default App;
