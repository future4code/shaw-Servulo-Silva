import React from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import VerPlaylists from "../VerPlaylists/VerPlaylists";
import MostrarPlaylists from "../../components/MostrarPlaylists";


export default class CriarPlaylists extends React.Component {
    state = {
        novaPlaylist: "",
    }


    createPlaylist = () => {
        const body = {
            name: this.state.novaPlaylist
        };

        axios.post(BASE_URL, body,
        {
            headers: {
                Authorization: 'servulo-silva-shaw'
            }
        })
        .then((res) => {
            this.setState({ novaPlaylist: "" });
            alert('Playlist criada com sucesso!')
        })
        .catch((err) => {
            alert('Não foi possível criar a playlist')
            alert(err.message)
        })
    }

    onChangeNomePlaylist = (event) => {
        this.setState({novaPlaylist: event.target.value})
    }

    render() {
        return (
            <div>
                <label>Criar Playlist</label>
                <input 
                value={this.state.novaPlaylist}
                onChange={this.onChangeNomePlaylist}
                />
                <button onClick={this.createPlaylist}>Criar</button>
                <MostrarPlaylists irParaDetalhesPL = {this.props.irParaDetalhesPL}/>
            </div>
        )
    }
}