import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";
import {
  InputsContainer,
  ScreenContainer,
  SignUpButtonContainer,
} from "./styled";
import useForm from "../../hooks/useForm";
import LoginForm from "./LoginForm";

const LoginPage = () => {
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
            // fullWidth
            // variant={"text"}
            // color={"primary"}
        >
            Não possui conta? Cadastre-se
            </button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
