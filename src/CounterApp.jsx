import { useState } from 'react';
import PropTypes from 'prop-types';//Importacion del PropTypes ya que vite no lo incluye



//Creacion del componente con rafc
export const CounterApp = ({value}) => {

    
    const [ counter, setCounter ] = useState(value);
    
    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleSubstract = () => setCounter(counter - 1)
    
    const handleReset = () => setCounter(value)
    
  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter }  </h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubstract}>-1</button>
        <button onClick={handleReset}>Reset</button>
    </>
  )
}
//Validaciones
CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}
