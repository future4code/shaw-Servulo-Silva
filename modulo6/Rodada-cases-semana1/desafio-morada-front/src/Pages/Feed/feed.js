import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/base_url";
import CardPosts from "../../Components/CardPosts/cardPosts";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useForm from "../../Hooks/useForm";
import Header from "../../Components/Header/Header";
import { ButtonForm, FormAndPosts, FormInput, MainContainerFeed, PostsOnly } from "./styled";

const Feed = () => {
  const [getPost, setGetPost] = useState([]);
  const [createNewPost, setCreateNewPost] = useState([]);
  const [form, onChange, clear] = useForm({ id: "", mensagem: "" });

  useEffect(() => {
    getPosts();
  }, []);

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost();
  };

  const getPosts = () => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setGetPost(res.data);
      })
      .catch((err) => {
        
      });
  };

  const createPost = () => {
    axios
      .post(`${BASE_URL}`, form)
      .then((res) => {
        setCreateNewPost(res);
        clear();
        getPosts();
      })
      .catch((err) => {
      });
  };

  const deletePost = (id) => {
    axios
      .delete(`${BASE_URL}/${id}`)
      .then((res) => {
        getPosts()
      })
      .catch(error => {
          console.error('There was an error!', error);
      });
  }

  const mapeandoPosts = getPost.map((post) => {
    return <CardPosts 
    id={post.id} 
    mensagem={post.mensagem} 
    deletePost={()=>deletePost(post.id)} 
    />;
  });

  return (
    <div>
      <Header />
      <MainContainerFeed>
        <FormAndPosts>
          <FormInput>
            <form onSubmit={onSubmitForm}>
            <TextField
              id="outlined-basic"
              label="Deixe sua reflexão"
              variant="outlined"
              name="mensagem"
              value={form.mensagem}
              onChange={onChange}
              placeholder="Deixe sua reflexão"
              required
              type={"text"}
            />
            <ButtonForm>
              <button>Enviar</button>
            </ButtonForm>
            
          </form>
          </FormInput>
          
          <PostsOnly>
        
              {mapeandoPosts.length > 0 ? mapeandoPosts : <p>Loading ...</p>}
            
          </PostsOnly>
        </FormAndPosts>
      </MainContainerFeed>
    </div>
  );
};
export default Feed;
