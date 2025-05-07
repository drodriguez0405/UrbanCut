import "./ConfirmacionReserva.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function ConfirmacionReserva() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cita } = location.state || {};

  useEffect(() => {
    if (cita) {
      
      fetch("https://urbancut.onrender.com/citas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cita),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Reserva guardada:", data);
        })
        .catch((error) => {
          console.error("Error al guardar la reserva:", error);
        });
    }
  }, [cita]);

  if (!cita) {
    return (
      <div className="confirmacion-container error">
        <h2>No hay información de la cita</h2>
        <p>Parece que llegaste aquí directamente sin completar una reserva.</p>
        <button 
          onClick={() => navigate("/reserva")} 
          className="btn-volver"
        >
          Volver a reservar
        </button>
      </div>
    );
  }

  return (
    <div className="confirmacion-container">
      <div className="confirmacion-header">
        <h2>¡Reserva Confirmada!</h2>
        <div className="confirmacion-icono">✓</div>
        <p>Tu número de reserva es: <strong>{cita.id}</strong></p>
      </div>
      
      <div className="confirmacion-datos">
        <div className="dato-item">
          <span>Cliente:</span>
          <strong>{cita.cliente}</strong>
        </div>
        <div className="dato-item">
          <span>Barbero:</span>
          <strong>{cita.barbero}</strong>
        </div>
        <div className="dato-item">
          <span>Fecha:</span>
          <strong>{new Date(cita.fecha).toLocaleDateString()}</strong>
        </div>
        <div className="dato-item">
          <span>Hora:</span>
          <strong>{cita.hora}</strong>
        </div>
        <div className="dato-item">
          <span>Servicio:</span>
          <strong>{cita.servicio}</strong>
        </div>
      </div>

      <div className="confirmacion-acciones">
        <button 
          onClick={() => navigate("/")} 
          className="btn-volver"
        >
          Volver al inicio
        </button>
        <button 
          onClick={() => navigate("/reserva")} 
          className="btn-nueva-reserva"
        >
          Hacer otra reserva
        </button>
      </div>
    </div>
  );
}

export default ConfirmacionReserva;