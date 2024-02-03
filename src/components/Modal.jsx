import { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje';

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, ocultarModal}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');

    const [mensaje, setMensaje] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('') || cantidad <= 0){
            setMensaje('todos los cambios son obligatorios')
            setTimeout( () => {
                setMensaje('')
            }, 3000)
            return;
        }
        guardarGasto({nombre, cantidad, categoria})
        //ocultar modal
        ocultarModal()
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="cerrar modal" 
                onClick={ocultarModal}
            />
        </div>
        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>
                <input type="text" 
                        placeholder='Añade el nombre del gasto'
                        id='nombre'
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>
                <input type="number" 
                        placeholder='Añade la cantidad de gasto: ej. 300'
                        id='cantidad'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select 
                    id="categoria"
                    value={categoria}
                    onChange={ e => setCategoria(e.target.value)}
                >
                    <option value="">--Seleccione--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input 
                type="submit"
                value='Añadir Gasto'
            />
        </form>
    </div>
  )
}

export default Modal