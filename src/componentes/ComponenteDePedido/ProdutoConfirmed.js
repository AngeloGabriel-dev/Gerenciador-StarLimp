import style from './ProdutoConfirmed.module.css'

function ProdutoConfirmed({nome, qtd, preco}){
    return(
        <div className={style.line}>
            <span>{nome}</span>
            <span>Quantidade: {qtd}L</span>
            <span>Preço: {preco}R$</span>
            <span>Total: {preco*qtd}R$</span>
        </div>
    )
}

export default ProdutoConfirmed