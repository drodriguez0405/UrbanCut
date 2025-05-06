import { Link } from "react-router-dom";
import "./RegistrarCita.css"

function RegistrarCita() {
  return (
    <>
      <div className="contenedor-reserva">
      <img src="../../public/img/LogoUrbanCut.png.png" alt="UrbanCut Logo" className="logo-reserva" />
      <h1>Reservar un turno</h1>

      <form className="formulario">
        <input type="text" placeholder="Nombre del cliente" required />
        <input type="text" placeholder="Tipo de corte" required/>
        <input type="date" required />
        <input type="time" required/>
        <input type="text" placeholder="Nombre del barbero" required />
        <Link to="/" type="submit">Reservar</Link>
      </form>

      <footer>© 2025 UrbanCut – Todos los derechos reservados</footer>
    </div>
    </>
  );
}

export default RegistrarCita;
