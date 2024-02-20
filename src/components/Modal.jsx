import { useState, useEffect } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje';

const Modal = ({animarModal, guardarGasto, ocultarModal, gastoEditar}) => {

    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [id, setId] = useState('');
    const [fecha, setFecha] = useState('');

    //setea los datos de actualizar en la ventana del modal
    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    },[gastoEditar])
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if([nombre, cantidad, categoria].includes('') || cantidad <= 0){
            setMensaje('todos los cambios son obligatorios')
            setTimeout( () => {
                setMensaje('')
            }, 3000)
            return;
        }
        guardarGasto({nombre, cantidad, categoria, id , fecha})
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
            <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
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
                value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}
            />
        </form>
    </div>
  )
}

export default Modal