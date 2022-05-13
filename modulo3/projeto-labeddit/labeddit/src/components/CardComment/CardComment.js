import React from "react";
import {MainContainerCard, Card, User, Body, VoteAndComment, Vote} from "./styled"


export function CardComment (props) {

    return (
        <MainContainerCard>
            <Card>
                <User>Enviado por: {props.username}</User>
                {props.title}
                <Body>{props.body}</Body>
                <VoteAndComment>
                    <Vote>Likes: {props.voteSum}</Vote>
                </VoteAndComment>
            </Card>
        </MainContainerCard>
    )
}