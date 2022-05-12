import React from "react";
import {MainContainerCard, Card, User, Body, VoteAndComment, Vote, Comment} from "./styled"


export function CardPost(props) {
    console.log(props)
    return (
        <MainContainerCard>
            <Card>
                <User>Enviado por: {props.username}</User>
                <Body>{props.body}</Body>
                <VoteAndComment>
                    <Vote>Likes: {props.voteSum}</Vote>
                    <Comment>Comments: {props.commentCount}</Comment>
                </VoteAndComment>
            </Card>
        </MainContainerCard>
    )
}