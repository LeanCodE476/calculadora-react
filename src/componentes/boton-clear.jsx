import React from "react";
import "../hojas-de-estilo/boton-clear.css"
const BotonClear = (props) => (
    <div className="boton-clear" onClick={props.deleteInput} >
        {props.children}
    </div>
)
export default BotonClear