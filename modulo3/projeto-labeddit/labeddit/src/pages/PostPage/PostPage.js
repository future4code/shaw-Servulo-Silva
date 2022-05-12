import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/urls";
import { CardPost } from "../../components/CardPost/CardPost";


const PostPage = () => {
    useProtectedPage()
    const postId = useParams()
    const [post, setPost] = useState({})
    const [comment, setComment] = useState({})
    const [postArray, setPostArray] = useState([])

    


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
            alert(err)
        })
    }

    useEffect(()=>{
        getPosts()
        getPostComments()
    },[])

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
        axios.get(`${BASE_URL}/posts/${post.id}`, headers)
        .then((res)=>{
            setComment(res.data)

        })
        .catch((err)=>{
            alert(err)
        })
    }
    



    return (
        <div>
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
        </div>
    )
            }

export default PostPage