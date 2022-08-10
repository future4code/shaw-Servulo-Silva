import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChartSide, MainContainer, TableSide } from './styled'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {BASE_URL} from '../../Constants/base_url'

const Main = () => {
    
    const [allParticipations, setAllParticipations] = useState([])
    
    
    const getParticipations = async () => {
        await axios
        .get(BASE_URL)
        .then((res) => {
                setAllParticipations(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
        }
        

        
        // ChartJS.register(ArcElement, Tooltip, Legend);
        // const dataBase = {
            //     hidden: false,
            //     datasets: [
                //         {
                    //             data: valores,
                    //             backgroundColor: [
                        //                 'rgb(255, 99, 132)',
                        //                 'rgb(54, 162, 235)',
                        //                 'rgb(255, 205, 86)',
                        //                 'rgb(0, 224, 138)',
    //                 'rgb(167, 32, 234)',
    //             ],
    //             borderColor: [
        //                 'rgb(255, 99, 132)',
        //                 'rgb(54, 162, 235)',
        //                 'rgb(255, 205, 86)',
        //                 'rgb(0, 224, 138)',
        //                 'rgb(167, 32, 234)'
        //             ],
        //             borderWidth: 2,
        //         },
        //     ],
        // };
        
        
        
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
        console.log(totalSum())
        // Map para pegar cada valor da tabela
        const mapParticipations = allParticipations.map((value)=>{
            return <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.first_name}</td>
            <td>{value.last_name}</td>
            <td className="participation">{`${((value.participation*100)/totalSum()).toFixed(1)}%`}</td>
        </tr>
    })
    
    // useEffect para renderizar na tela os ítens da requisição GET
        useEffect(() => {
            getParticipations()
        }, [])
    
    return (
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
                        {mapParticipations}
                    </tbody>
                </table>
            </TableSide>

            <ChartSide>
                Chart
            </ChartSide>
        </MainContainer>
    )
}

export default Main;