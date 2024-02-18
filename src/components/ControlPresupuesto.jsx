import {useState, useEffect } from "react"

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    //calculo de los gastos 
    useEffect( ()=> {
        const totalGAstado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGAstado
        setGastado(totalGAstado)
        setDisponible(totalDisponible)
    },[gastos])

    //Para dar el formato a la cantidad de presupuesto
    const formatearCantidad = cantidad => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <>
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            Grafica aqui
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
            </p>
            <p>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span>{formatearCantidad(gastado)}
            </p>
        </div>
        
    </div>
    </>
  )
}

export default ControlPresupuesto