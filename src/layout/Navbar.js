import logo from '../img/restaurant-icon.png'
import styles from './Navbar.module.css'

import {Link} from 'react-router-dom'

function Navbar(){

    return(
        <nav class={styles.navbar}>
          <Link to="/">
          <img src={logo} alt="Restaurante" className="logo"/>
          </Link>
        <ul className={styles.list}>
          <li class={styles.item}>
          <Link to="/">Home</Link>
          </li>

          <li className={styles.item}>
          <Link to="/reservas">Reservas</Link>
          </li>


          <li className={styles.item}>
          <Link to="/NewReserva">Nova Reserva</Link>
          </li>

          <li className={styles.item}>
          <Link to="/contato">Contato</Link>
          </li>
        </ul>
      
     
      </nav>  
    )
}

export default Navbar;