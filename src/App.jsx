import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers'
import IconoNuevogasto from './img/nuevo-gasto.svg'


function App() {
  const [gastos, setGastos] = useState([])

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({})

  //editar los gastos
  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0) {
      setModal(true)

      setTimeout( () => {
      setAnimarModal(true)
    }, 500)
    }
  },[gastoEditar])

  //ocultar modal
  const ocultarModal = () => {
    console.log('ocultando...')
    setModal(false)
    setGastoEditar({})
    setTimeout( () => {
        setAnimarModal(false)
    }, 500)
  }

  //ventana de modal 
  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout( () => {
      setAnimarModal(true)
    }, 500)
  }

  const guardarGasto = gasto => {
    if(gasto.id){
      //actualizamos
      const gastosActualizados = gastos.map( gastosLista => gastosLista.id === gasto.id ? gasto : gastosLista)
      setGastos(gastosActualizados)
    }else{
      //creamos un gasto nuevo
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }
    ocultarModal()
  }

  const eliminarGasto = id => {
  //eliminar gasto
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }
  

  return (
  <div className={modal ? 'fijar' : ''}>  
    <Header
      gastos={gastos}
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
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
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
                     //setAnimarModal={setAnimarModal}
                     guardarGasto={guardarGasto}
                     ocultarModal={ocultarModal}
                     gastoEditar={gastoEditar}
    />}
    
  </div>
  )
}

export default App
