import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import styled from "styled-components";
import {CardPost} from "../../components/CardPost/CardPost"
import useProtectedPage from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom"



const MainContainerFeed = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
`

const CreatingPost = styled.div`
`



// ----------------------------------------------------------------------------



const FeedPage = () => {
   
    useProtectedPage()
    const [post, setPost] = useState([])
    const [createNewPost, setCreateNewPost] = useState([])
    const navigate = useNavigate()


    const [form, onChange, clear] = useForm({ title: "", body: "" });

    useEffect(()=>{
        getPosts()
    },[])

    const onSubmitForm = (event) => {
        event.preventDefault();
        createPost()
      };
    


    const getPosts = () => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
              }
        }
        axios.get(`${BASE_URL}/posts`, headers)
        .then((res)=>{
            setPost(res.data)
        })
        .catch((res)=>{
            console.log(res);
        })
    }


    const createPost = () => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
              }
        }
        
        axios.post(`${BASE_URL}/posts`, form, headers)
        .then((res)=>{
            setCreateNewPost(res)
            clear()
            getPosts()
        })
        .catch((res)=>{
            alert(res)
        })
    }


    const mapeandoPosts = post.map((post)=>{
        return (
        <CardPost
        key = {post.id}
        id = {post.id}
        username = {post.username}
        title = {post.title}
        body = {post.body}
        voteSum = {post.voteSum}
        commentCount = {post.commentCount}
        
        />
        )
    })
    return (
        <MainContainerFeed>
            <CreatingPost>
                <form onSubmit={onSubmitForm}>
                    <input
                     name="title" 
                     value={form.title} 
                     onChange={onChange} 
                     placeholder="Title"
                     required
                     type={"text"}
                    />
                    <input
                     name="body" 
                     value={form.body} 
                     onChange={onChange} 
                     placeholder="Message"
                     required
                     type={"text"}
                    />
                    <button>Enviar</button>
                </form>
            </CreatingPost>
            <Cards>
            {mapeandoPosts.length>0?mapeandoPosts:<p>Loading ...</p>}
            </Cards>
        </MainContainerFeed>
    )
}

export default FeedPage