import style from './PedidoCard.module.css'
import { useState, useEffect } from 'react'
import { BsTrashFill, BsArchive } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function PedidoCard({nome, data, custoTotal, id, key, handleRemove}){
    function remove(e){
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={style.container}>
            <p>Cliente: {nome}</p>
            <p>Data: {data}</p>
            <p>Valor total: {custoTotal}</p>
            <button onClick={remove}><BsTrashFill/></button>
            <Link to={`/pedido/${id}`}>
                Visualizar pedido   <BsArchive/>
            </Link>

        </div>
    )
}

export default PedidoCard