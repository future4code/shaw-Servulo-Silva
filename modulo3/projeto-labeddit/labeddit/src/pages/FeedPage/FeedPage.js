import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import styled from "styled-components";




const MainContainerFeed = styled.div`
    border: 1px solid black;
    width: 300px;
    margin: 12px;
`

const FeedPage = () => {

    const [post, setPost] = useState([])
    useEffect(()=>{
        getPosts()
    },[])
    const getPosts = () => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
              }
        }
        axios.get(`${BASE_URL}/posts`, headers)
        .then((res)=>{
            console.log(res.data);
            setPost(res.data)
        })
        .catch((res)=>{
            console.log(res);
        })
    }

    const mapeandoPosts = post.map((post)=>{
        return (
        <CardPost
        username = {post.username}
        body = {post.body}
        
        />
        )
    })
    return (
        <MainContainerFeed>
            {mapeandoPosts}
        </MainContainerFeed>
    )
}

export default FeedPage