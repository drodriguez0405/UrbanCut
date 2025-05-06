import React from "react";
import './Corte.css'

function Corte(props) {
  return (
    <>
      <div className="corte">
        <img src={props.imagen} alt={props.nombre} />
        <p>{props.nombre}</p>
      </div>
    </>
  );
}

export default Corte;
