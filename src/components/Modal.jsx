import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        console.log('ocultando...')
        setModal(false)
        setTimeout( () => {
            setAnimarModal(false)
        }, 500)
        
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={CerrarBtn} alt="cerrar modal" 
                onClick={ocultarModal}
            />
        </div>
        <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
            <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>
                <input type="text" 
                        placeholder='Añade el nombre del gasto'
                        id='nombre'
                />
            </div>
            <div className='campo'>
                <label htmlFor="cantidad">cantidad</label>
                <input type="number" 
                        placeholder='Añade la cantidad de gasto: ej. 300'
                        id='cantidad'
                />
            </div>
            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select id="categoria">
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