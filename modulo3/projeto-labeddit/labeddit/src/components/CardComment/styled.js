import styled from "styled-components"

export const MainContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 320px;
    min-width: 300px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    margin: 8px 0;
    padding: 8px;
    background: lightgrey;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    cursor: pointer;

`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
    padding: 4px;
    /* padding: 8px; */
`

export const User = styled.div`
    font-size: 0.8rem;
    /* padding: 4px; */
`

export const Body = styled.div`
    font-size: 1.2rem;
    /* padding: 4px; */
`

export const VoteAndComment = styled.div`
display: flex;
/* padding: 8px 0; */
`


export const Vote = styled.div`
    font-size: 0.8rem;
    /* padding: 4px; */
`

export const Comment = styled.div`
    font-size: 0.8rem;
    padding-left: 12px;
`


