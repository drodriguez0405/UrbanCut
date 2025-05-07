import { useNavigate } from "react-router-dom";
import "./RegistrarCita.css";
import { useState } from "react";

function RegistrarCita() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cliente: "",
    corte: "",
    fecha: "",
    hora: "",
    barbero: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validarFormulario = () => {
    if (!formData.cliente.trim()) {
      setError("El nombre del cliente es requerido");
      return false;
    }
    if (!formData.corte.trim()) {
      setError("El tipo de corte es requerido");
      return false;
    }
    if (!formData.fecha) {
      setError("La fecha es requerida");
      return false;
    }
    if (!formData.hora) {
      setError("La hora es requerida");
      return false;
    }
    if (!formData.barbero.trim()) {
      setError("El nombre del barbero es requerido");
      return false;
    }
    
    // Validar fecha futura
    const fechaSeleccionada = new Date(formData.fecha);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    
    if (fechaSeleccionada < hoy) {
      setError("La fecha debe ser hoy o en el futuro");
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validarFormulario()) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch("https://urbancut.onrender.com/citas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cliente: formData.cliente,
          servicio: formData.corte,
          fecha: formData.fecha,
          hora: formData.hora,
          barbero: formData.barbero
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      
      navigate("/confirmacion", {
        state: {
          cita: {
            ...data,
            cliente: formData.cliente,
            corte: formData.corte,
            barbero: formData.barbero
          }
        }
      });
      
    } catch (error) {
      console.error("Error al crear cita:", error);
      setError("Error al reservar la cita. Por favor intente nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contenedor-reserva">
      <img 
        src="/img/LogoUrbanCut.png" 
        alt="UrbanCut Logo" 
        className="logo-reserva" 
      />
      <h1>Reservar un turno</h1>
      
      {error && <div className="error-message">{error}</div>}

      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          name="cliente"
          placeholder="Nombre del cliente"
          value={formData.cliente}
          onChange={handleChange}
          disabled={isLoading}
        />
        <input
          type="text"
          name="corte"
          placeholder="Tipo de corte"
          value={formData.corte}
          onChange={handleChange}
          disabled={isLoading}
        />
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          disabled={isLoading}
        />
        <input
          type="time"
          name="hora"
          value={formData.hora}
          onChange={handleChange}
          disabled={isLoading}
        />
        <input
          type="text"
          name="barbero"
          placeholder="Nombre del barbero"
          value={formData.barbero}
          onChange={handleChange}
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="btn-reservar"
          disabled={isLoading}
        >
          {isLoading ? "Reservando..." : "Reservar"}
        </button>
      </form>

      <footer>© 2025 UrbanCut – Todos los derechos reservados</footer>
    </div>
  );
}

export default RegistrarCita;