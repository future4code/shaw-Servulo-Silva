import React from 'react';
import axios from 'axios';
import PaginaListas from './Pages/PaginaListas';



const headers = {
  headers: {
    Authorization: "servulo-silva-shaw"
  }
};
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

export default class App extends React.Component {

  //Estado com playlists e texto do input de name e email
  state = {
    usuarios: [],
    inputName: "",
    inputEmail: "",
    mudaTela: false
  };
  componentDidMount() {
    //Pegar todos os Users
    this.getAllUsers();
  }

  getAllUsers() {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    //Aqui é onde a função de get é chamada
    //No get passamos a url, e o headers
    axios
      .get(url, headers)
      .then((res) => {
        //Caso de tudo certo guarde os usuarios no estado
        console.log(res.data);
        this.setState({
          usuarios: res.data
        });
      })
      .catch((err) => {
        //Caso de erro exiba-o no console
        console.log(err.response.data);
        alert(err.response.data);
      });
  }
  postUsers = () => {
    //body é criado com o valor que tem no inputName
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };
    //Aqui é onde a função de post é chamada
    //No pot passamos a url, body, e o headers
    axios
      .post(baseUrl, body, headers)
      .then((res) => {
        //Pegar todos os users
        alert(res `O usuário ${this.state.inputName} foi cadastrado com sucesso`)
        this.getAllUsers();
        //Deixar o texto do input com um valor vazio
        this.setState({
          inputName: "", 
          inputEmail: ""
        });
        
      })
      .catch((err) => {
        //Alertar caso um erro aconteça
        alert(err.response.data.message);
      });
  };
  onChangeName = (event) => {
    this.setState({
      inputName: event.target.value,
    });
  };
  onChangeEmail = (event) => {
    this.setState({
      inputEmail: event.target.value,
    });
  }
  funcaoMudaTela = () => {
    this.setState({mudaTela: !this.state.mudaTela})
  }
  render(){

  return (
    <div>
      <button onClick={this.funcaoMudaTela}>Troca de tela</button><br/>
      {this.state.mudaTela ? 
      <div>
        <input placeholder='Nome' value={this.state.inputName} onChange={this.onChangeName} />
        <input placeholder='E-mail' value={this.state.inputEmail} onChange={this.onChangeEmail} />
        <button onClick={this.postUsers}>Criar Usuário</button>
      </div> : <PaginaListas usuarios = {this.state.usuarios}/>}
      
     


      
    </div>
  );
}
}


