import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex: 1;
    
`

export const TableSide = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
    margin-top: 30px;



    table {
    border-collapse: collapse;
    width: 80%;

    }

    th,
    td {
    border: 1px solid black;
    text-align: left;
    padding: 8px;
    /* font-size: 32px; */
    }

    th {
    /* background-color: rgb(117, 201, 250); */
    }

    td {
    /* background-color: rgb(205, 235, 253); */

    
    }

    form td:last-child {
    display: flex;
    justify-content: space-evenly;
    }

    form * {
    font-size: 28px;
    }

    .participation {
       text-align: center;
    }
`


export const ChartSide = styled.div`
    width: 50%;
    background-color: yellow;
`


