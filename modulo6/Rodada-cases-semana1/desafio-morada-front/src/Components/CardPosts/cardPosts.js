import React from "react"
import { MainContainerCard } from "./styled"
import { useNavigate } from "react-router-dom"

const CardPosts = (props) => {
    const navigate = useNavigate()

    return(
        <MainContainerCard>
            <div>
                {props.mensagem}
                <br></br>
                <button onClick={props.deletePost}>Deletar</button>
            </div>
        </MainContainerCard>
    )
}

export default CardPosts