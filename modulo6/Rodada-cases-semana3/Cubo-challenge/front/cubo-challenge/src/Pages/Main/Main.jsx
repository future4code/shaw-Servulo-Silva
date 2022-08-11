import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChartSide, PageContainer, HeaderContainer, InputContainer , MainContainer, TableSide, ChartContainer } from './styled'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {BASE_URL} from '../../Constants/base_url'
import useForm from "../../Hooks/useForm";

ChartJS.register(
    ArcElement, Tooltip, Legend
)

const Main = () => {

    const [values, setValues] = useState([])
    const [names, setNames] = useState([])
    const [allParticipations, setAllParticipations] = useState([])
    const [form, onChange, clear] = useForm({first_name: "", last_name: "", participation: "" });



    // GET para preencher a tabela
    const getParticipations = async () => {
    await axios
    .get(BASE_URL)
    .then((res) => {
            setAllParticipations(res.data)
        })
        .catch((err) => {
            console.log("Erro do Get", err.response)
        })
    }
    

    const createParticipation = async () => {
        await axios
        .post(BASE_URL, form)
        .then((res) => {
            getParticipations()
            clear();
        })
        .catch((err) => {
            alert(err.response.data);
        })
    }
    

    const onSubmitForm = (event) => {
        event.preventDefault();
        createParticipation();
      };
    
    




  
    
    //Doughnut
    ChartJS.register(
        ArcElement, Tooltip, Legend
    )
    const data = {
        datasets: [{
            data: values,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 224, 138)',
                'rgb(167, 32, 234)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(0, 224, 138)',
                'rgb(167, 32, 234)'
            ],
            borderWidth: 1,

        }],
        labels: names
    };


    // useEffect para renderizar na tela os ítens da requisição GET
    useEffect(()=> {
        getParticipations()
    }, [])
    
    useEffect(()=>{
        const userParticipation = allParticipations.map((value ) => {
            return ((value.participation*100)/totalSum()).toFixed(1)
        })
        setValues(userParticipation)

        const userNames = allParticipations.map((value ) => {
            return value.first_name
        })
        setNames(userNames)
    }, [allParticipations])


        
        //Map para pegar o valor total
        const mapPart = allParticipations.map((eachvalue)=>{
            return eachvalue.participation
        })
        
        const totalSum = () => {
            const array = mapPart
            let sum = 0
            
            for (let i = 0; i < array.length; i++) {
                sum += array[i]
            }
            return sum
        }
        
        // Map para pegar cada valor da tabela
        const mapParticipations = allParticipations.map((value)=>{
            return <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.first_name}</td>
            <td>{value.last_name}</td>
            <td className="participation">{`${((value.participation*100)/totalSum()).toFixed(1)}%`}</td>
        </tr>
    })
    

    



    
    return (
        <PageContainer>
            
            <HeaderContainer>
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

                        <button type="submit">SEND</button>
                    </form>
                </InputContainer>
            </HeaderContainer>

            <MainContainer>
                <TableSide>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>First name</th>
                                            <th>Last name</th>
                                            <th>Participation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {mapParticipations.length > 0 ? mapParticipations : "Loading ..."} */}
                                        {mapParticipations}
                                    </tbody>
                                </table>
                            </TableSide>

                            <ChartSide>
                                <ChartContainer>
                                    <Doughnut data={data}/>
                                </ChartContainer>
                            </ChartSide>
            </MainContainer>
            
        </PageContainer>
    )
}

export default Main;