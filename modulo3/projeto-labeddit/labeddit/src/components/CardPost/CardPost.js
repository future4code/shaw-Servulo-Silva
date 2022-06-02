import React from "react";
import {MainContainerCard, Card, User, Title, Body, VoteAndComment, Vote, Comment} from "./styled"
import {goToPostPage} from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import {FcLike, FcDislike} from 'react-icons/fc';

let iconStyles = { color: "#7869bf", fontSize: "1.5em", cursor: "pointer" };

export function CardPost(props) {
    const navigate = useNavigate()
    return (
        <MainContainerCard>
            <Card>
                <User>Enviado por: {props.username}</User>
                <Title>Título: <b>{props.title}</b></Title>
                <Body>{props.body}</Body>
                <VoteAndComment>
                    <Vote>
                        <FcLike style={iconStyles} onClick={()=>props.onClickLike(props.id, props.userVote)}/>
                        {props.voteSum}
                        <FcDislike style={iconStyles} onClick={()=>props.onClickDislike(props.id, props.userVote)}/>
                    </Vote>
                    <Comment>Comments: {props.commentCount}</Comment>
                    <button onClick={()=>goToPostPage(navigate, props.id)}>Ver Detalhes</button>
                </VoteAndComment>
            </Card>
        </MainContainerCard>
    )
}

