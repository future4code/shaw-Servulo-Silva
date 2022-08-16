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
    background: #fbfbfb;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    font-family: sans-serif;

    button{
        border: 0px;
        border-radius: 8px;
        padding: 6px;

        :hover{
            cursor: pointer;
            background-color: green;
            color: white;
            transition: 0.4s;
        }
    }
`