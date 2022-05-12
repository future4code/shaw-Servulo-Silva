import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import styled from "styled-components";
import {CardPost} from "../../components/CardPost/CardPost"



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
        voteSum = {post.voteSum}
        commentCount = {post.commentCount}
        
        />
        )
    })
    return (
        <MainContainerFeed>
            <Cards>
            {mapeandoPosts}
            </Cards>
        </MainContainerFeed>
    )
}

export default FeedPage