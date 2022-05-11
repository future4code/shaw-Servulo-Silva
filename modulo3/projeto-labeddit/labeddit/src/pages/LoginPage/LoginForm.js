import React, {useState} from "react"
import { InputsContainer, LoginFormContainer } from "./styled"
import useForm from '../../hooks/useForm'
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <LoginFormContainer>
            <form onSubmit={onSubmitForm}>
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
            </form>
        </LoginFormContainer>
    )
}

export default LoginForm