import Select from "../Form/Select"
import Input from "../Form/Input"
import { useEffect, useState } from "react"
import styles from "../ComponentesDePedidos/ProdutoContainer.module.css"

function ProdutoContainer({handleProduct, produtos}){
    const [custo, setCusto] = useState(0)
    const [pdt, setPdt] = useState({})
    const [qtdeProduto, setQtdeProduto] = useState(0)

    function capturaId(e){
        
        let id = e.target.value
        
        setPdt(produtos.filter((prdt)=> prdt.id == id)[0])
    }

    function calculaCusto(e){
        let qtde = e.target.value
        setQtdeProduto(qtde)
        if(pdt != null && qtde != undefined){
            setCusto(qtde*pdt.preco)
        }
    }

    function submit(e){
        e.preventDefault()
        console.log(qtdeProduto);
        handleProduct(pdt, qtdeProduto);
    }

    return(
        <form className={styles.container} onSubmit={submit}>
            <label>Adicionar Produto:</label>
            <br></br>
            <select onChange={capturaId}>
                <option>Selecione algum produto</option>
                {produtos.length > 0 && 
                produtos.map((product) => 
                <option value={product.id} key={product.id}>
                    {product.nome}
                </option>
                )
                }
            </select>
            <span>Preço/L: {pdt.preco}R$</span>
            <input 
                onChange={calculaCusto}
                type="number"
                placeholder="Quantidade/L"
            />
            <span>Custo total:</span>
            <input 
                type="number"
                value={custo}
            />
            <button onClick={submit}>OK</button>
        </form>
    )
}

export default ProdutoContainer