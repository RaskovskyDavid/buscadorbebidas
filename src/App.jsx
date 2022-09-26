import { Container, ModalBody } from 'react-bootstrap'
import Formulario from './components/Formulario.jsx'
import ListadoBebidas from './components/ListadoBebidas.jsx'
import ModalBebida from './components/ModalBebida.jsx'
import { BebidasProvider } from './context/BebidasProvider.jsx'
import { CategoriasProvider } from './context/CategoriasProvider'
function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
            <h1>Buscador de Bebidas</h1>
        </header>
        <Container className='mt-5'>
            <Formulario />
            <ListadoBebidas />
            <ModalBebida />
          </Container>
      </BebidasProvider>
     </CategoriasProvider>
  )
}

export default App
