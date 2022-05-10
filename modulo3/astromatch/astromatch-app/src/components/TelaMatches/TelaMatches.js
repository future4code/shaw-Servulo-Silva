import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";



function TelaMatches() {
    const [match, setMatch] = useState([])

    useEffect (() =>{
        getMatches()},
        []
    )

    const getMatches = () =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/servulo/matches"

        axios
        .get(url)
        .then((res)=>{
            setMatch(res.data.matches)
        })
    }
    let mapeandoMatches
    if(match != []){
     mapeandoMatches = match.map((match)=>{
        return (
            <div>
                <p>{match.name}, {match.age}</p>
                <p>{match.bio}</p>
            </div>
        
        )
    })}else{
        mapeandoMatches = <p>Sem Matches</p>
    }
  return (
    <div>
    
     {mapeandoMatches}
    </div>
  );
}

export default TelaMatches;
