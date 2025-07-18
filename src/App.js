import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Reservas from './pages/Reservas'
import NewReserva from './pages/NewReserva'
import Contato from './pages/Contato'

import Navbar from './layout/Navbar'
import Container from './layout/Container'
import Footer from './layout/Footer'


function App(){

  return(
    
     <Router>
     <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/newreserva" element={<NewReserva />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Container>
    <Footer />
    </Router>
    
   
  )
}

export default App;