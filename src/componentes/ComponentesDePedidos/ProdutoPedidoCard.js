import styles from "./ProdutoPedidoCard.module.css"

function ProdutoPedidoCard({nome, preco, qtde}){
    return(
        <div className={styles.container}>
            <span>{nome}</span>
            <span>Quantide: {qtde}L</span>
            <span>Preço/L: {preco}R$</span>
            <span>Custo total: {preco*qtde}R$</span>
        </div>
    )
}

export default ProdutoPedidoCard