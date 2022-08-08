import React, {useState} from "react"
import { InputsContainer, LoginFormContainer } from "./styled"
import useForm from '../../hooks/useForm'
import { useNavigate } from "react-router-dom"
import axios from "axios";
import {BASE_URL} from "../../constants/urls"
import {goToFeedPage} from "../../routes/coordinator"

const SignUpForm = () => {
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })
    const navigate = useNavigate()
    // const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        postSignup()
        clear();
    }

     const postSignup = () => {
        axios
            .post(`${BASE_URL}/users/signup`, form)
            .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.data.token)
                goToFeedPage(navigate)
    
            })
            .catch((err) => {
                alert(err.response.data.message)
                console.log(err)
            })
    }
    // const signUp = () => {
        
    //     axios.post(`${BASE_URL}/users/signup`, form)
    //     .then((res)=>{
    //         console.log(res)
    //         localStorage.setItem("token", res.data.token)
    //         })
            
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }
    return (
        <LoginFormContainer>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                <input 
                name="username" 
                value={form.username} 
                onChange={onChange} 
                placeholder="Nome"
                required
                type="text"
                
                />
                
                <input 
                name="email" 
                value={form.email} 
                onChange={onChange} 
                placeholder="E-mail"
                required
                type={"email"}
                
                />

                <input 
                name="password" 
                value={form.password} 
                onChange={onChange} 
                placeholder="Senha"
                required
                type={"password"}
                />

                <button
                type={"submit"}
                >Continuar</button>

                </form>
            </InputsContainer>
        </LoginFormContainer>
    )
}

export default SignUpForm