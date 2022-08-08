import React from "react";
import {MainContainerCard, Card, User, Body, VoteAndComment, Vote} from "./styled"
import {FcLike, FcDislike} from 'react-icons/fc';


let iconStyles = { color: "#7869bf", fontSize: "1.5em", cursor: "pointer" };

export function CardComment (props) {

    return (
        <MainContainerCard>
            <Card>
                <User>Enviado por: {props.username}</User>
                {props.title}
                <Body>{props.body}</Body>
                <VoteAndComment>
                <Vote>
                    <FcLike style={iconStyles} onClick={()=>props.onClickLike(props.id)}/>
                    {props.voteSum}
                    <FcDislike style={iconStyles} onClick={()=>props.onClickDislike(props.id)}/>
                </Vote>
                </VoteAndComment>
            </Card>
        </MainContainerCard>
    )
}