import styled from "styled-components";

export const Container = styled.div`
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