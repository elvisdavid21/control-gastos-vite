import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto, setPresupuesto, isValid, setIsValid}) => {
    
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        
        <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValid={setIsValid}
        />
    </header>
  )
}

export default Header