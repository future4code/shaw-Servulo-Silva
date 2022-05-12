import React from "react";
import {MainContainerCard, Card, User, Body, VoteAndComment, Vote, Comment} from "./styled"
import {goToPostPage} from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";


export function CardPost(props) {
    const navigate = useNavigate()
    return (
        <MainContainerCard onClick={()=>goToPostPage(navigate, props.id)}>
            <Card>
                <User>Enviado por: {props.username}</User>
                {props.title}
                <Body>{props.body}</Body>
                <VoteAndComment>
                    <Vote>Likes: {props.voteSum}</Vote>
                    <Comment>Comments: {props.commentCount}</Comment>
                </VoteAndComment>
            </Card>
        </MainContainerCard>
    )
}