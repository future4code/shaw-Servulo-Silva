import React from "react";
import styled from "styled-components";


const MostrandoUsers = styled.div`
    display: flex;
    flex-direction: column;
    
`

export default class PaginaListas extends React.Component {
    render() {
        console.log(this.props.usuarios)

        let pegandoUsers = this.props.usuarios.map((usuario) => {
            return (
                <MostrandoUsers>
                <li>{usuario.name}</li>
                </MostrandoUsers>
            )
        })
        
        return (
            <MostrandoUsers>
            {pegandoUsers}
            </MostrandoUsers>
        )
    }
}