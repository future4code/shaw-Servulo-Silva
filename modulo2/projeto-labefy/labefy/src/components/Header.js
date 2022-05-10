import React from "react";
import styled from "styled-components"

const Cabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding: 0 48px;
    margin: 0 0 12px 0;

    button {
        padding: 5px 10px;
        border-radius: 5px;
        
    }
`
const Titulo = styled.div`
    font-size: 32px;
    color: #111;

    span {
        color: orange;
    }
   
`


export default class Header extends React.Component {

    render() {
        return (
            <Cabecalho>
                <Titulo>Servin<span>Fy</span></Titulo>
                <button onClick={this.props.irParaPrincipal}>Inicio</button>
                
            </Cabecalho>
        )
    }
}
