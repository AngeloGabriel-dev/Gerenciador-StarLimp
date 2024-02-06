import styles from './Fazer_Pedido.module.css';
import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';
import { useState, useEffect } from 'react';
import ProdutoContainer from '../ComponentesDePedidos/ProdutoContainer';
import { json, useNavigate } from 'react-router-dom';
import ProdutoPedidoCard from '../ComponentesDePedidos/ProdutoPedidoCard';

function Fazer_Pedido(){
    const [opcoes, setOpcoes] = useState([])
    const [carregou, setCarregou] = useState(false)
    const [pedido, setPedido] = useState({})
    const [idProdutos, setIdProdutos] = useState([]);
    const [qtdeProdutos, setQtdeProdutos] = useState([]);
    const [pdtsPedidos, setPdtsPedidos] = useState([]);
    const [confirmacaoProdutos, setConfirmacaoProdutos] = useState([]);


    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:8080/api/v1/produtos/getAll',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setOpcoes(data)
            setCarregou(true)
        })
        .catch((err) => console.log(err))
    },[])

    function handleChange(e){
        setPedido({...pedido, [e.target.name]:e.target.value})
    }

    function adicionarProduto(product, qtde){
        
        setIdProdutos([...idProdutos, product.id])
        setQtdeProdutos([...qtdeProdutos, qtde])
        setConfirmacaoProdutos([...confirmacaoProdutos, 0])
        var idProducts = [...idProdutos, product.id].join(" ")
        var qtdeProducts = [...qtdeProdutos, qtde].join(" ")
        var confirmProducts = [...confirmacaoProdutos, 0].join(" ")
        console.log(idProducts)
        console.log(qtdeProducts)
        setPedido({...pedido, produtos:(idProducts), qtdeProdutos:(qtdeProducts), confirmacaoProdutos:(confirmProducts)})
        product = {...product, qtde:qtde}
        setPdtsPedidos([...pdtsPedidos, product])
    }

    function criarPedido(e){
        e.preventDefault()
        var custoTotal = 0.0
        for(let i=0;i<idProdutos.length; i++){
            let qtd = parseFloat(qtdeProdutos[i])
            for(let j=0; j<opcoes.length; j++){
                if(opcoes[j].id === idProdutos[i]){
                    custoTotal += opcoes[j].preco*qtd
                }
            }
        }
        setPedido({...pedido, custoTotal:custoTotal})
        let i=0
        pdtsPedidos.map((p)=>{
            p.quantidade -= qtdeProdutos[i]
            i++
            fetch(`http://localhost:8080/api/v1/produtos/${p.id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(p)
            })
            .then((resp)=>resp.json())
            .then((data)=>console.log(data))
            .catch((err)=>console.log(err))
        })
       
        fetch("http://localhost:8080/api/v1/pedidos", {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify({...pedido, custoTotal:custoTotal})
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate("/pedidos")
        })
        .catch((err) => console.log(err))
    }

    return(
        <form className={styles.form_container} onSubmit={criarPedido}> 
            <Input name="nomeCliente" text="Nome do cliente" type="text" handleOnChange={handleChange}/>
            
            {
                pdtsPedidos.map((pdt)=><ProdutoPedidoCard nome={pdt.nome} preco={pdt.preco} qtde={pdt.qtde}/>)
            }
            
            <ProdutoContainer produtos={opcoes} handleProduct={adicionarProduto}/>
            
            <SubmitButton text='Finalizar Pedido'/>
        </form>
    )
}

export default Fazer_Pedido;