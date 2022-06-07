import React from "react";
import "../hojas-de-estilo/boton.css"
function Boton(props) {
     const esOperador = (valor) => {
    return isNaN(valor) && (valor != '.') && (valor != '=')
  }
    return (
        <div onClick={()=>props.buttonClick(props.children)}  className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>
            {props.children}
        </div>
    )
}
export default Boton