import React from "react";
import axios from "axios"
import { BASE_URL } from "../constants/urls";
import { PlaylistCard } from "../pages/VerPlaylists/styled";


export default class MostrarPlaylists extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    componentDidUpdate() {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios.get(`${BASE_URL}`, {
            headers: {
                Authorization: 'servulo-silva-shaw'
            }
        })
        .then((res) => {this.setState({playlists: res.data.result.list})})
        .catch((err) => {alert(err.data)})
    }

    deletePlaylist = (id) => {
        axios.delete(`${BASE_URL}/${id}`, {
            headers: {
                Authorization: 'servulo-silva-shaw'
            }
        })
        .then((res) => {
            alert("Deletado com sucesso")
        })
        .catch((err) => {alert(err.data)})
    }

    render() {
        // Fazendo um map do array para pegar somente o nome das playlists
        const mostrarPL = this.state.playlists.map((play) =>{
            return ( 
                <div key={play.id}>
                <PlaylistCard 
                onClick={() => this.props.irParaDetalhesPL(play.id)}
                >
                    <p>{play.name}</p>
                </PlaylistCard>
                <button onClick={() => this.deletePlaylist(play.id)}>Deletar</button>
                </div>
            )
        })
        return (
            <div>
                {mostrarPL}
            </div>
        )
    }
}