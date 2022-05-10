import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// import style-inicial from "./style-inicial.css"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid red;
    border-radius: 6px;
    height: 600px;
    width: 400px;
    margin: auto;
    /* background: linear-gradient(#0000, #fcc98e); */
    background-image: linear-gradient( to right, #e5487f 20%, #fc5069 30%, #ff8742);
    /* background-color: orange; */
`
const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* border: 1px solid black; */
    border-radius: 6px;
    width: 350px;
    height: 500px;
    margin: auto;
    background: url(${ (props) => props.imagemPerfil});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 12px 10px rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19);

    

    /* img {
        width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    } */
`
const Infos = styled.div`
    font-size: 16px;
    color: white;
    text-shadow: black 0.1em 0.1em 0.2em;
    padding-left: 8px;
    

`



function TelaInicial(props) {
    const [perfil, setPerfil] = useState({})

    const [like, setLike] = useState({})


    useEffect (() =>{
        getProfileToChoose()},
        []
    )
    const getProfileToChoose = () =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/servulo/person"
        axios
        .get(url)
        .then((res) => {
            setPerfil(res.data.profile)
        })
}
    const choosePerson = () =>{
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/servulo/choose-person"
        const header = {header: 'Content-Type: application/json'}
        const body = {
            "id": perfil.id,
            "choice": true
        }
        axios
        .post(url, body, header)
        .then((res)=>{
            console.log(res.data)
            setLike(res.data.isMatch)
            // getProfileToChoose()
            if(res.data.isMatch){
                alert(`Você deu match com ${perfil.name}`)
            }
        })
    }

    const liked = () =>{
        choosePerson()
        getProfileToChoose()
    }

  return (
    <MainContainer>
     <Perfil imagemPerfil = {perfil.photo}>
         {/* <img src={perfil.photo}/> */}
         <Infos>
            <h2>{perfil.name}, {perfil.age}</h2>
            <h4>{perfil.bio}</h4>
         </Infos>
        
     </Perfil>
     <div>
        <button onClick={liked}>Like</button>
        <button onClick={getProfileToChoose}>Deslike</button>
     </div>
     <button 
     onClick={props.irParaMatches}
     id = {perfil.id}   
     >Matches</button>
     
     
    </MainContainer>
  );
}

export default TelaInicial;
