import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";
import {
  ScreenContainer,
  SignUpButtonContainer,
} from "./styled";
import useForm from "../../hooks/useForm";
import LoginForm from "./LoginForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";



const LoginPage = () => {
  useUnprotectedPage()
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  const onSubmitForm = (event) => {
    
      event.preventDefault()
  };


 

  return (
    <ScreenContainer>
      
      <LoginForm/>
      <SignUpButtonContainer>
        
        <button
            onClick={() => goToSignUpPage(navigate)}
            type={"submit"}
        >
            Não possui conta? Cadastre-se
            </button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
