import { useParams } from 'react-router-dom';
import Input from '../Form/Input';
import style from './ProdutoForm.module.css';
import {useState, useEffect} from 'react'
import SubmitButton from '../Form/SubmitButton';
import { useNavigate } from 'react-router-dom';

function ProdutoForm(){
    const [produto, setProduto] = useState({});
    const {id} = useParams()

    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:8080/api/v1/produtos/${id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            setProduto(data)
        })
        .catch((err)=>console.log(err))
    }, [])

    const handleChange = (e)=>{
        setProduto({...produto, [e.target.name]:e.target.value})
    }
    
    function submit(e){
        e.preventDefault()
        fetch(`http://localhost:8080/api/v1/produtos/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(produto),
        })
        .then((resp) => navigate('/produtos'))
        .catch((err) => console.log(err))
    }
    
    return(
        <form className={style.container} onSubmit={submit}>
            <Input className={style.element}
                type='text'
                text='Nome do produto'
                name='nome'
                placeholder={produto.nome}
                handleOnChange={handleChange}
            />
            
            <Input className={style.element}
                type='decimal'
                text='Preço/L'
                name='preco'
                placeholder={produto.preco}
                handleOnChange={handleChange}
            />
            <Input className={style.element}
                type='number'
                text='Quantidade em estoque/L'
                name='quantidade'
                placeholder={produto.quantidade}
                handleOnChange={handleChange}
            />
            <SubmitButton className={style.element}
                text='Atualizar'
            />
        </form>
    )
}

export default ProdutoForm