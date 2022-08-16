import styled from "styled-components";

export const MainContainerFeed = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const FormAndPosts = styled.div`
width: 99%;
max-width: 360px;
border: 1px solid white;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
text-align: center;

`

export const FormInput = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
flex-grow: 1;
margin: 12px;

`
export const ButtonForm = styled.div`
margin-top: 6px;
button{
    border-radius: 6px;
    border: 0px;
    width: 100px;
    padding: 8px;
    :hover{
        background-color: #71bf43;
        transition: 0.4s;
        color: white;
    }
}
`

export const PostsOnly = styled.div`
display: flex;
flex-direction: column-reverse;
`