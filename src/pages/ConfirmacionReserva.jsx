import "./ConfirmacionReserva"
import { useLocation, Link } from "react-router-dom";

function ConfirmacionReserva(){
    const location = useLocation();
  const { cita } = location.state || {};

  if (!cita) {
    return (
      <div className="confirmacion-container">
        <h2>No hay información de la cita</h2>
        <Link to="/" className="btn-volver">Volver al inicio</Link>
      </div>
    );
  }
    return(
        <>
        <div className="confirmacion-container">
      <h2>¡Cita reservada con éxito!</h2>
      <div className="confirmacion-datos">
        <button className="btn-dato">Cliente: {cita.cliente}</button>
        <button className="btn-dato">Barbero: {cita.barbero}</button>
        <button className="btn-dato">Fecha: {cita.fecha}</button>
        <button className="btn-dato">Hora: {cita.hora}</button>
        <button className="btn-dato">Servicio: {cita.servicio}</button>
      </div>
      <Link to="/" className="btn-volver">Volver al inicio</Link>
    </div>
        </>
    )
}

export default ConfirmacionReserva;