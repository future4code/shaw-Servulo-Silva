import React, {useState} from "react"
import { InputsContainer, LoginFormContainer } from "./styled"
import useForm from '../../hooks/useForm'
import { useNavigate } from "react-router-dom"
import axios from "axios";
import {BASE_URL} from "../../constants/urls"
import {goToFeedPage} from "../../routes/coordinator"
import {login} from "../../services/users"


const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    // const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate)
        clear();
        
       
    }


    

    return (
        <LoginFormContainer>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
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

export default LoginForm