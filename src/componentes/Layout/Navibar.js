import {Link} from 'react-router-dom';
import Container from './Conteiner';
import logo from '../../imagens/starLimp_logo.png';
import styles from './Navibar.module.css';


function Navibar(){
    return(
        <nav className={styles.navibar}>
        <Container>
            <Link to="/">
                <img style={{margin:'1em'}} width={'100px'} height={'100px'} src={logo} alt='starlimp'/>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/fazerPedido">Fazer Pedido</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/pedidos">Pedidos</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/produtos">Produtos</Link>
                </li>
            </ul>
        </Container>
        </nav>
    )
}

export default Navibar;