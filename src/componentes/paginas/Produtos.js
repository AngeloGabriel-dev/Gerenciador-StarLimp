import style from './Produtos.module.css';
import AdicionarProduto from '../ComponentesDeProdutos/AdicionarProduto';
import { useEffect, useState } from 'react';
import ProdutoCard from '../ComponentesDeProdutos/ProdutoCard';
import { useLocation } from 'react-router-dom';

function Produtos(){
    const [indices, setIndices] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [produtoMessage, setProdutoMessage] = useState('');

    const location = useLocation();
    let message = '';
    if(location.state){
        message = location.state.message;
    }
    
    useEffect(()=>{
        fetch("http://localhost:8080/api/v1/produtos/getAll",{
            method:"GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((resp)=>resp.json())
        .then((data) => {
            console.log("conectou");
            console.log(data);
            setProdutos(data);
        }
        )
        .catch((err)=>console.log("deu erro"))
    }, [])

    function create(produto){

        fetch("http://localhost:8080/api/v1/produtos", {
            method: "POST",
            headers: {
                "content-type":"application/json",

            },
            body: JSON.stringify(produto)
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log("Produto adicionado com sucesso!")
            setProdutos([...produtos, data]);
        })
        .catch((err)=>console.log(err))
    }

    function removeProduto(id){
        fetch(`http://localhost:8080/api/v1/produtos/${id}`, {
            method: "DELETE",
            headers: {
                "content-type":"application/json",
            },
        })
        .then((data)=>{
            setProdutos(produtos.filter( (produto) => produto.id !== id))
            setProdutoMessage('Produto deletado com sucesso!')
        })
        .catch((err)=>console.log(err))
    }

    return (
        <div>
            {
                produtos.length > 0 && 
                produtos.map((produto) =>
                    <ProdutoCard 
                    nome={produto.nome} 
                    id={produto.id} 
                    preco={produto.preco} 
                    quantidade={produto.quantidade}
                    handleRemove={removeProduto}
                    />
                )                
            }
            
            <AdicionarProduto handleSubimit={create}/>
                
        </div>
    )
}

export default Produtos;