import express from "express";
import cors from "cors";
import {produtos} from "./data"

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});


// Exercício 1
app.get("/test", (req, res) => {
    res.send("Sua API está funcionando");
  });


// Exercício 3
app.post("/adicona-novo-produto", (req, res) => {

    let {id, name, price} = req.body

    const generateId: string = Math.floor(Date.now() * Math.random()).toString(36)
    id = generateId
    produtos.push({id, name, price})


    res.send(produtos);
  });

  
// Exercício 4
app.get("/todos-os-produtos", (req, res) => {
    res.send(produtos);
  });

  // Exercício 5
app.put("/editar-precos/:id", (req, res) => {
    const idProduto = req.params.id
    const {price} = req.body
    const novoPreco: any = produtos.find((precoNovo) =>{
        return precoNovo.id == idProduto
    })

    novoPreco.price = price

    res.send(novoPreco);
  });


    // Exercício 6
app.delete("/deletar-produto/:id", (req, res) => {
    const idProduto = req.params.id

    const indexProduto = produtos.findIndex((produto)=>{
        return produto.id == idProduto
    })
    function produtosAtualizados ():any{

        if(indexProduto === -1){
            return res.status(404).json({ error: "Produto não existe"})
        }else{
            produtos.splice(indexProduto,1)
            return produtos
        }
        
    }

    res.send(produtosAtualizados());
  });






