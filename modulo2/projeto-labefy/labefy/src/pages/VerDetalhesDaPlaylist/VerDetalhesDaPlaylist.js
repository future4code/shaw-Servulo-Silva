import React from "react";
import axios from "axios";
import styled from "styled-components"
import { BASE_URL } from "../../constants/urls";


const CardTrack = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`
export default class VerDetalhesDaPlaylist extends React.Component {
  state = {
    tracks: [],
    nomeTrack: "",
    nomeArtista: "",
    urlTrack: ""
  }
  
  componentDidMount() {
    this.getPlaylistTracks()
}


  getPlaylistTracks = () => {
    // await axios.get(`${BASE_URL}/${this.props.idDaPlaylist}/tracks`, {
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, {
      headers: {
          Authorization: 'servulo-silva-shaw'
      }
  })
  .then((res) => {
    this.setState({tracks: res.data.result.tracks})})
  .catch((err) => 
    {alert(err.response.data.message)
    })
} 


addTrackToPlaylist = () => {
  const body = {
      name: this.state.nomeTrack,
      artist: this.state.nomeArtista,
      url: this.state.urlTrack
  }

  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, body,
  {
      headers: {
          Authorization: 'servulo-silva-shaw'
      }
  })
  .then((res) => {
      this.setState({ nomeTrack: ""  });
      this.setState({ nomeArtista: ""  });
      this.setState({ urlTrack: ""  });
      this.getPlaylistTracks();
      alert('Música adicionada com sucesso!')
  })
  .catch((err) => {
      console.log(err.message);
      alert('Não foi possível adicionar a música')
  })
}


deletePlaylist = (id) => {
  axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${id}`,
  {
      headers: {
          Authorization: 'servulo-silva-shaw'
      }
  })
  .then((res) => {
      this.getPlaylistTracks()
      alert('Música deletada com sucesso')
  })
  .catch((err) => {
      console.log(err.message);

  })
};


  onChangeNomeTrack = (event) => {
    this.setState({ nomeTrack: event.target.value })
  };

  onChangeNomeArtista = (event) => {
    this.setState({ nomeArtista: event.target.value })
  };

  onChangeURLTrack = (event) => {
    this.setState({ urlTrack: event.target.value })
  };



  render() {
    
    const mostrandoTracks = this.state.tracks.map((track) => {
      return (
        <CardTrack key={track.id}>
          <p>Nome: {track.name}</p>
          <p>Artista: {track.artist}</p>
          <audio controls src={track.url} type="audio/mp3"/>
          <button onClick={() => this.deletePlaylist(track.id)}>Deletar Track</button>
          <br/>
          <br/>
        </CardTrack>
      )

    })
    return (
      <div>
        <div>
          {mostrandoTracks}
        </div>
        <div>
          <h3>Adicionar Track</h3>
          <label><strong>Título</strong></label>
          <input value={this.state.nomeTrack} onChange={this.onChangeNomeTrack}></input>
          <label><strong>Artista</strong></label>
          <input value={this.state.nomeArtista} onChange={this.onChangeNomeArtista}></input>
          <label><strong>URL:</strong></label>
          <input value={this.state.urlTrack} onChange={this.onChangeURLTrack}></input>
          <br />
          <button onClick={this.addTrackToPlaylist}>Adicionar</button>
        </div>
        
      </div>
    );
  }
}