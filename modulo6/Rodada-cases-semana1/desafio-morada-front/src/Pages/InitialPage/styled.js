import styled from "styled-components";

export const MainContainerInitialPage = styled.div`
display: flex;
flex-direction: column;
/* background-color: #f0f2f5; */
background-image: linear-gradient(to right, white , #71bf43);
height: 100vh;
`

export const InitialPageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const CentralContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid white;
border-radius: 10px;
height: 80vh;
background-color: #f0f2f5;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
text-align: center;

Button{
    height: 36px;
    background-color: #71bf43;
    color: white;
    :hover{
        background-color: green;
        color: white;
        transition: 0.4s;
    }
}
`

