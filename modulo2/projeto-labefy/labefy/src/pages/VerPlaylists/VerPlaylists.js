import React from "react";
import MostrarPlaylists from "../../components/MostrarPlaylists";


export default class VerPlaylists extends React.Component {
    
    render() {
       
        return (
            <div>
                <MostrarPlaylists irParaDetalhesPL = {this.props.irParaDetalhesPL}/>
            </div>
        )
    }
}