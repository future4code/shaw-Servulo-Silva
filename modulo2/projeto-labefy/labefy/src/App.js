import React from "react"
import CriarPlaylists from "./components/CriarPlaylist";
import VerPlaylists from "./components/VerPlaylists";

export default class App extends React.Component {


  render() {


     return (
    <div>
      <CriarPlaylists/>
      <VerPlaylists/>
    </div>
  )
  }
 
}


