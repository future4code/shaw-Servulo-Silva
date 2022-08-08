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

const MainContainerPost = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const WritingComment = styled.div`
`



// ------------------------------------------------------------------

// Início da Page

const PostPage = () => {
    useProtectedPage()
    const postId = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [postArray, setPostArray] = useState([])
    const [createNewComment, setCreateNewComment] = useState([])
    const [form, onChange, clear] = useForm({ body: "" });

    const onSubmitForm = (event) => {
        event.preventDefault();
        createComment()
      };

    useEffect(()=>{
        getPosts()
        getPostComments()
    },[])


// Função para buscar os posts 

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

    

// Pegando apenas o post específico 

    const filtrandoPost = (posts) => {
        return posts.find((post)=>{
            if(post.id === postId.id){
                return true
            }
        })
    }


// Função para pegar os comentarios 

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


    

    // Função para criar comentário 

    const createComment = () => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
              }
        }
        
        axios.post(`${BASE_URL}/posts/${postId.id}/comments`, form, headers)
        .then((res)=>{
            setCreateNewComment(res)
            clear()
            getPostComments()
        })
        .catch((res)=>{
            alert(res)
        })
    }
    
    const onClickLike =(id)=>{
        postCreateCommentVote(id)
        
     }
     const onClickDislike =(id)=>{
        putChangeCommentVote(id)
     }



     // Lógica do like 

    

     const postCreateCommentVote =(id)=>{
        const body = {
                direction: 1,
        }
        axios
        .post(`${BASE_URL}/comments/${id}/votes`, body,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            
            alert(res.data)
            getPosts()
            getPostComments()
           
        })
        .catch((err)=>{
            console.log(err)
            alert(err.response.data.message)
        })
    
    };
    
    const putChangeCommentVote =(id)=>{
        const body = {
                direction: -1,
        }
        axios
        .put(`${BASE_URL}/comments/${id}/votes`, body,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            alert("Deslike Registrado")
            getPosts()
            getPostComments()
        })
        .catch((err)=>{
            
            alert(err.response.data.message)
        })
    
    };


    // Fazendo o map na função para pegar cada comentário 

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
                onClickLike = {onClickLike}
                onClickDislike = {onClickDislike}
            />
        )
            
    })


    return (
        <MainContainerPost>
            <WritingComment>
            <form onSubmit={onSubmitForm}>
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
            </WritingComment>
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
        </MainContainerPost>
    )
            }

export default PostPage