import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers'
import IconoNuevogasto from './img/nuevo-gasto.svg'


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([])
  //const [listaGastis, setListgastos] = useState([])

  //ocultar modal
  const ocultarModal = () => {
    console.log('ocultando...')
    setModal(false)
    setTimeout( () => {
        setAnimarModal(false)
    }, 500)
  }

  const handleNuevoGasto = () => {
    console.log('diste click en el botton')
    setModal(true)

    setTimeout( () => {
      console.log('animando...')
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = gasto => {
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])
    ocultarModal()
  }
  

  return (
  <div>  
    <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}

    />

    {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
            />
          </main>
          <div className='nuevo-gasto'>
            <img src={IconoNuevogasto} alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
    )}

    {modal && <Modal setModal={setModal}
                     animarModal={animarModal}
                     setAnimarModal={setAnimarModal}
                     guardarGasto={guardarGasto}
                     ocultarModal={ocultarModal}
    />}
    
  </div>
  )
}

export default App
