import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());


// Exercício 1
app.get("/ping", (req, res) => {          
    res.send("Pong")
})


// Exercício 2
type users = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Exercício 3

const afazeres: users[] = [
    {
        userId: 1,
        id: 1,
        title: "Estudar",
        completed: true
        },
    {
        userId: 1,
        id: 2,
        title: "Se exercitar",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "Beber água",
        completed: true
    },
    {
        userId: 1,
        id: 4,
        title: "Comer bem",
        completed: true
    },
    {
        userId: 1,
        id: 5,
        title: "Dormir",
        completed: false
    }
]

// Exercício 4
app.get("/afazeresTrue", (req, res) => {       
    const feitos = afazeres.map((feito)=>{
        if(feito.completed === true){
            return feito
        }
    })
    res.send(feitos)
})

// Exercício 5



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

