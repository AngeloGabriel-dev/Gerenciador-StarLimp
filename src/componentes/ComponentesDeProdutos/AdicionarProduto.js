import styles from "./AdicionarProduto.module.css";
import { useState } from "react";

function AdicionarProduto({handleSubimit, dadosProduto}){

    const [produto, setProduto] = useState(dadosProduto || {});

    function handleOnChange(e){
        setProduto({...produto, [e.target.name]:e.target.value});
    }

    function submit(e){
        e.preventDefault();
        handleSubimit(produto);
    }

    return(
    <form onSubmit={submit}>
        <h3 className={styles.rotulo}>Adicionar produto ao catálogo:</h3>

        <input 
            className={styles.inputs}
            type="text" 
            placeholder="Nome do Produto" 
            onChange={handleOnChange} 
            value={produto.nome || ''}
            name="nome" 
        />
        <input 
            className={styles.inputs}
            type="number" 
            placeholder="Preço" 
            onChange={handleOnChange} 
            value={produto.preco || null}
            name="preco"
        />
        <input 
            className={styles.inputs}
            type="number" 
            placeholder="Quantidade em estoque" 
            onChange={handleOnChange} 
            value={produto.quantidade || null}
            name="quantidade"
        />
        <button className={styles.btn}>OK</button>
    </form>
    )
}

export default AdicionarProduto