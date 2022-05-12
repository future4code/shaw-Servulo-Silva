import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ScreenContainer,
  } from "./styled";
import useForm from "../../hooks/useForm";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  const [form, onChange, clear] = useForm({name:"", email: "", password: "" });
  const navigate = useNavigate();
  const onSubmitForm = (event) => {
    
      event.preventDefault()
  };

  return (
    <ScreenContainer>
      <SignUpForm/>
    </ScreenContainer>
  );
};

export default SignUpPage