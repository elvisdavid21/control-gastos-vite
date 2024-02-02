import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValid}) => {

    const [mensaje, setMensaje] = useState('')
    
    const handlepresupuesto = (e) => {
        e.preventDefault();
        if(!presupuesto || presupuesto < 0){
            setMensaje('Presupuesto no valido')
            return;
        }
        setMensaje('')
        setIsValid(true)
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlepresupuesto} className="formulario">
            <div>
                <label htmlFor="presupuesto">Definir Presupuesto</label>

                <input id="presupuesto" className="nuevo-presupuesto" 
                    type="number" 
                    placeholder="Añade tu presupuesto"
                    value={presupuesto}
                    onChange={ e => setPresupuesto(Number(e.target.value))}
                />
            </div>
            <input type="submit" value="Añadir" />
            
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        </form>
    </div>
  )
}

export default NuevoPresupuesto