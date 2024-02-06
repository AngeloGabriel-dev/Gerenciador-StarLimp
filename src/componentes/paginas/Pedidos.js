import PedidoCard from '../ComponentesDePedidos/PedidoCard';
import style from './Pedidos.module.css';
import {useState, useEffect} from 'react';

function Pedidos(){
    const [pedidos, setPedidos] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/api/v1/pedidos/getAll", {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            setPedidos(data)
            console.log(data)
            pedidos.map((pe)=>console.log(pe.nomeCliente))
        })
        .catch((err)=>console.log(err))
    }, [])

    function removerPedido(id){
        fetch(`http://localhost:8080/api/v1/pedidos/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((resp)=>resp.json)
        .then((data)=>{
            setPedidos(pedidos.filter((p)=>p.id !== id))
        })
        .catch((err)=>console.log(err))
    }
    
    return(
        <div className={style.container}>
            {pedidos.length != 0 && pedidos.map((pedido)=>
                 <PedidoCard 
                 nome={pedido.nomeCliente} 
                 data={pedido.data} 
                 custoTotal={pedido.custoTotal} 
                 id={pedido.id}
                 key={pedido.id} 
                 handleRemove={removerPedido}
                 />
            )}
            {
                pedidos.length == 0 && <h3>Não há pedidos a serem exibidos.</h3>
            }
        </div>
    )
}

export default Pedidos