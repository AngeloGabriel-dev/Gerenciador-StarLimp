import style from './ProdutoListElement.module.css';

function ProdutoListElement({id, nome, qtd, preco, confirmar}){

    function onConfirm(e){
        e.preventDefault()
        confirmar(id)
    }

    return(
        <div className={style.line}>
            <span>{nome}</span>
            <span>Quantidade: {qtd}L</span>
            <span>Preço: {preco}R$</span>
            <span>Total: {preco*qtd}R$</span>
            <button onClick={onConfirm}>OK</button>
        </div>
    )
}

export default ProdutoListElement