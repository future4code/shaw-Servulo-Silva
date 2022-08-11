import {Container, InputContainer} from './styled'
import { useState } from 'react';
import useForm from '../../Hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../Constants/base_url';
const Header = ({getParticipations, allParticipations}) => {

    const [form, onChange, clear] = useForm({ first_name: "", last_name: "", participation: "" });

    const onSubmitForm = (event) => {
        event.preventDefault();
        createParticipation();
        // getParticipations();
        window.location.reload()
        console.log("teste sub")
      };

      const createParticipation = () => {
        axios
            .post(BASE_URL, form)
            .then((res) => {
                clear();
            })
      }
      

    return (
        <Container>
            <InputContainer>
                <form onSubmit={onSubmitForm}>
                    <input
                        label="First Name"
                        name='first_name'
                        placeholder='First name'
                        required
                        type={"text"}
                        value={form.first_name}
                        onChange={onChange}
                    />

                    <input
                        label="Last Name"
                        name='last_name'
                        placeholder='Last name'
                        required
                        type={"text"}
                        value={form.last_name}
                        onChange={onChange}
                    />

                    <input
                        label="Participation"
                        name='participation'
                        placeholder='Participation'
                        required
                        type={"text"}
                        value={form.participation}
                        onChange={onChange}
                    />

                    <button>SEND</button>
                </form>
            </InputContainer>
        </Container>
    )
}

export default Header