import styles from './Home.module.css'
import Restaurante from '../img/ImgRestaurante.jpg'
import LinkButton from '../layout/LinkButton';



function Home(){

    return(
<section className={styles.home_container}>
  <div className={styles.home_text}>
    <h1>Reserve, Saboreie, Viva: <span>IReserva</span></h1>
        <p>Faça sua reserva com um clique e transforme sua experiência gastronômica!</p>
    <LinkButton to="/NewReserva" text="Criar Reserva" />
  </div>

  <div className={styles.home_image}>
    <img src={Restaurante} alt="Restaurante" />
  </div>
</section>

    )
}

export default Home;