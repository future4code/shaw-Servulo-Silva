import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    pessoas: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "Servulinho",
        fotoUsuario: "https://picsum.photos/50/60",
        fotoPost: "https://picsum.photos/200/160",
      },
      {
        nomeUsuario: "Minoso",
        fotoUsuario: "https://picsum.photos/50/55",
        fotoPost: "https://picsum.photos/200/170",
  }
]
}


  render() {

    const listaDePosts = this.state.pessoas.map((pessoa) => {
      return (
        <Post
        nomeUsuario = {pessoa.nomeUsuario}
        fotoUsuario = {pessoa.fotoUsuario}
        fotoPost = {pessoa.fotoPost}
        />
      )

    })

    return (

      <MainContainer>
        {listaDePosts}
      </MainContainer>
    )
  }
}
  


export default App;
