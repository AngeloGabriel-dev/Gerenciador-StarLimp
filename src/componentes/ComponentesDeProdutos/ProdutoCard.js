import { Link } from 'react-router-dom'
import style from './ProdutoCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function ProdutoCard({id, nome, preco, quantidade, handleRemove}){
    const remove = ((e) => {
        e.preventDefault()
        handleRemove(id)
    })
    
    return(
        <div className={style.container}>
            <span>{nome}</span>
            <span>Preço: {preco}R$</span>
            <span>Quantidade em Estoque: {quantidade}L</span>
            
                <Link to={`/produto/${id}`} className={style.editar}>
                    <BsPencil/>editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill className={style.lixeira}/>
                </button>

        </div>
    )
}

export default ProdutoCard