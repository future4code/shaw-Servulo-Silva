import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

class App extends React.Component {
  state = {
    pagina: 1,
  };

  proximaEtapa = () => {
    this.setState({ pagina: this.state.pagina + 1 });
  };
  render() {
    let paginaAtual;
    switch (this.state.pagina) {
      case 1:
        paginaAtual = <Etapa1 />;
        break;
      case 2:
        paginaAtual = <Etapa2 />;
        break;
      case 3:
        paginaAtual = <Etapa3 />;
        break;
      case 4:
        paginaAtual = <Final />;
        break;

      default:
        paginaAtual = <Final />;
    }

    return (
      <div>
        {paginaAtual}
        {this.state.pagina <= 3 && 
        <button onClick = {this.proximaEtapa}>Próxima Etapa</button>}
      </div>
    );
  }
}

export default App;
