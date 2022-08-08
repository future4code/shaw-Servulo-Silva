import * as express from "express";
import * as cors from "cors";
import {User, users, Statement} from "./data"

const app = express();

app.use(express.json());
app.use(cors());


// Pegar todos os usuários

app.get("/users", (req, res) => {
    res.send(users)
})


app.post("/users", (req, res) => {
    let errorCode: number = 400;
    try {
      const { name, CPF, birthDate, balance, statement } = req.body;
      const newDate = new Date(birthDate)
        const age: number = Math.floor((Date.now() - newDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
  

      if (age < 18) {
        res.status(403)
        throw new Error('User must be over 18 years old')
      }
      if (!name || !CPF || !birthDate || !balance ) {
        errorCode = 422;
        throw new Error("Please check the fields!")
      }

      const findCPF = users.find((usuario)=> { return usuario.CPF === CPF})

      if(findCPF){
          errorCode = 401
          throw new Error("This CPF already exist")
      }

      
  
      const newUser: User = {
        name,
        CPF,
        birthDate,
        balance,
        statement
      }
  
      users.push(newUser);
  
      res.status(201).send({ message: "User created successefully" });
    } catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
  });



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
