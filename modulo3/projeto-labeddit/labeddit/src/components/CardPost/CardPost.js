import React from "react";
import {MainContainerCard} from "./styled"


export default function CardPost(props) {

    return (
        <MainContainerCard>
            <Card>
                <p>{props.username}</p>
            </Card>
        </MainContainerCard>
    )
}