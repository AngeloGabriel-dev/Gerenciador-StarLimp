import style from './Pedido.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProdutoListElement from '../ComponenteDePedido/ProdutoListElement';
import ProdutoConfirmed from '../ComponenteDePedido/ProdutoConfirmed';

function Pedido(){
    const [pedido, setPedido] = useState({})
    const [produtos, setProdutos] = useState([])
    const [produtosPedidos, setProdutosPedidos] = useState([])
    const [carregou, setCarregou] = useState(false)
    const [idsProdutos, setIdsProdutos] = useState([])
    const [qtdeProdutos, setQtdeProdutos] = useState([])
    const [produtosConfirmados, setProdutosConfirmados] = useState([])
    
    const {id} = useParams()

    useEffect(()=>{
        fetch(`http://localhost:8080/api/v1/pedidos/${id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            setPedido(data)
            console.log(data)
            setIdsProdutos(data.produtos.split(" "))
            setQtdeProdutos(data.qtdeProdutos.split(" "))
            setProdutosConfirmados(data.confirmacaoProdutos.split(" "))
        })
        .catch((err)=>console.log(err))
        
        
    },[])

    useEffect(()=>{
        fetch("http://localhost:8080/api/v1/produtos/getAll",{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            setProdutos(data)
            console.log(data)
            setCarregou(true)
        })
        .catch((err)=>console.log(err))
    }, [])

    useEffect(()=>{
        let pdts = (idsProdutos.map((i) => produtos.filter((pdt)=>pdt.id==i)[0]))
        setProdutosPedidos(pdts)
        for(let i=0; i<pdts.length; i++){
            pdts[i].qtde = qtdeProdutos[i]
            pdts[i].confirmacao = produtosConfirmados[i]
        }
        console.log(pdts)
        console.log(produtosPedidos)
        console.log(produtosConfirmados)
    }, [carregou])

    function confirmarProduto(ide){
        let pdts = [...produtosPedidos]
        let pdtsConfirmados = [...produtosConfirmados]
        setProdutosPedidos(pdts)
        setProdutosConfirmados(pdtsConfirmados)
        for(let i=0; i<pdts.length; i++){
            console.log(pdts[i].id)
            console.log(ide)
            if(pdts[i].id == ide){
                console.log(pdts[i].id)
                pdtsConfirmados[i] = "1"
                pdts[i].confirmacao = "1"
            }
        }
        let pdd = {...pedido}
        pdd.confirmacaoProdutos = pdtsConfirmados.join(" ")
        console.log(pdd)
        
        fetch(`http://localhost:8080/api/v1/pedidos/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(pdd)
        })
        .then((resp)=>resp.json())
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))
    }

    return(
        <div className={style.container}>
            <p className={style.nome}>{pedido.nomeCliente}</p>
            <span className={style.data}>Data do pedido: {pedido.data}</span>
            <div className={style.listaProdutos}>
                <h1>Lista de produtos</h1>
                {carregou && 
                produtosPedidos.map((p)=><p>{
                    p.confirmacao == "0" ?
                    <ProdutoListElement nome={p.nome}
                        preco={p.preco}
                        qtd={p.qtde}
                        confirmar={confirmarProduto}
                        id={p.id}
                    />
                    :
                    <ProdutoConfirmed nome={p.nome}
                    preco={p.preco}
                    qtd={p.qtde}
                    
                    />
                }
                </p>)}
                {produtosConfirmados.filter((p)=> p == "1").length == produtosConfirmados.length ?
                    <p>Pedido concluído com sucesso!</p>
                    :
                    <p>Ainda há produtos pendentes.</p>
                }
            </div>
            {carregou && <h1>Total a pagar:   {pedido.custoTotal}R$</h1>}
        </div>
    )
}

export default Pedido