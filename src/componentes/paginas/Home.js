import LinkButton from "../Layout/LinkButton";
import styles from './Home.module.css';

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo(a) à <span>Star Limp</span></h1>
            <p>Faça o seu pedido agora mesmo!</p>
            <LinkButton to='/fazerPedido' text='Fazer Pedido'/>
        </section>
    )
}

export default Home;