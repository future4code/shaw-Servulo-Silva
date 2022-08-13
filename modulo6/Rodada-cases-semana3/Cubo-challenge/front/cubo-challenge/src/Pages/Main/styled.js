import styled from "styled-components";


export const PageContainer = styled.div`
`

// HEADER



export const HeaderContainer = styled.div`
    height: 120px;
    width: 100vw;
    background-color: #00b8e2;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-around; */
    /* align-items: center; */
`

export const InputContainer = styled.div`
    display: flex;
    flex: 1;
    /* flex-wrap: wrap; */



    form {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        
    }

    input {
        margin: 10px;
        padding: 15px 10px;
        width: 250px;
        border: none;
        border-radius: 2px;
    }

    button {
        padding: 15px 55px;
        border: 1px solid white;
        border-radius: 2px;
        background: none;
        color: white;
        margin-left: 10px;

        :hover {
            cursor: pointer;
            background-color: white;
            color: #00b8e2;
            transition: 0.3s;
        }
    }
`

// MainPage

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    
`

export const MainContent = styled.div`
    display: flex;
    flex: 1;
    
`
export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    p {
        margin-top: -10px;
    }
`

export const TableSide = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    margin-top: 30px;



    table {
    border-collapse: collapse;
    width: 80%;
    height: auto;
    margin-left: 100px;

    }

    th,
    td {
    border: 1px solid #d6d6d6;
    text-align: left;
    color: #424242;
    padding: 8px;
    font-size: 16px;

    /* .participation {
        width: 20px;
    } */
    }

    .participation {
       text-align: center;
    }
`


export const ChartSide = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`

export const ChartContainer = styled.div`
    width: 40%;
    margin-top: 30px;
    margin-right: 50px;
`


