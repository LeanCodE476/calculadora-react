import './App.css';
import "./hojas-de-estilo/container-calculadora.css"
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla.jsx'
import BotonClear from "./componentes/boton-clear.jsx"
import { useState } from 'react'
import {evaluate} from 'mathjs'
function App() {
  const [input, setInput] = useState('');

  const agregarInput = (value) => {
    setInput(input + value)
  }
  const calcularResultado = () => {
    if (input) {
      
      setInput(evaluate(input))
    }
  }
  return (
    <div className="App">
      <div className="container-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton buttonClick={agregarInput}>1</Boton>
          <Boton buttonClick={agregarInput}>2</Boton>
          <Boton buttonClick={agregarInput}>3</Boton>
          <Boton buttonClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton buttonClick={agregarInput}>4</Boton>
          <Boton buttonClick={agregarInput}>5</Boton>
          <Boton buttonClick={agregarInput}>6</Boton>
          <Boton buttonClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton buttonClick={agregarInput}>7</Boton>
          <Boton buttonClick={agregarInput}>8</Boton>
          <Boton buttonClick={agregarInput}>9</Boton>
          <Boton buttonClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton buttonClick={
            calcularResultado}
          >=</Boton>
          <Boton buttonClick={agregarInput}>0</Boton>
          <Boton buttonClick={agregarInput}>.</Boton>
          <Boton buttonClick={agregarInput}>/</Boton>
        </div>
        <BotonClear deleteInput={()=>setInput('')}>Clear</BotonClear>
      </div>
    </div>
  );
}

export default App;
