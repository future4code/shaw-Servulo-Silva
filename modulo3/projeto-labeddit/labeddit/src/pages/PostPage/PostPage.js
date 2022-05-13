import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/urls";
import { CardPost } from "../../components/CardPost/CardPost";
import styled from "styled-components"
import { CardComment } from "../../components/CardComment/CardComment";


const RenderPost = styled.div`
`

const RenderComments = styled.div`
`



// ------------------------------------------------------------------


const PostPage = () => {
    useProtectedPage()
    const postId = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [postArray, setPostArray] = useState([])

    useEffect(()=>{
        getPosts()
        getPostComments()
    },[])


    const getPosts = () => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
              }
        }
        axios.get(`${BASE_URL}/posts`, headers)
        .then((res)=>{
            setPostArray(res.data)
            const postFiltrado = filtrandoPost(res.data)
            setPost(postFiltrado)

        })
        .catch((err)=>{
            // alert(err)
        })
    }

    

    const filtrandoPost = (posts) => {
        return posts.find((post)=>{
            if(post.id === postId.id){
                return true
            }
        })
    }


    const getPostComments = () => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
              }
        }
        axios.get(`${BASE_URL}/posts/${postId.id}/comments`, headers)
        .then((res)=>{
            setComments(res.data)
            console.log(res)

        })
        .catch((err)=>{
            alert(err)
        })
    }

    const mapeandoComments = comments.map((comment) => {
        return (
            <CardComment
                key = {comment.id}
                id = {comment.id}
                username = {comment.username}
                title = {comment.title}
                body = {comment.body}
                voteSum = {comment.voteSum}
                commentCount = {comment.commentCount}
            />
        )
            
    })
    



    return (
        <div>
            <RenderPost>
                {post?
                <CardPost
                key = {post.id}
                id = {post.id}
                username = {post.username}
                title = {post.title}
                body = {post.body}
                voteSum = {post.voteSum}
                commentCount = {post.commentCount}
                />
                :<p>Loading...</p> }
            </RenderPost>
            <RenderComments>
                {mapeandoComments}
            </RenderComments>
        </div>
    )
            }

export default PostPage