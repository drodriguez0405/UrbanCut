import "./PerfilCliente.css";
import { useEffect, useState } from "react";

function PerfilCliente() {
  const [usuario, setUsuario] = useState(null);
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    setUsuario(usuarioGuardado);

    if (usuarioGuardado) {
      fetch(
        `https://urbancut.onrender.com/citas?perfil=${usuarioGuardado.user}`
      )
        .then((res) => res.json())
        .then((data) => setCitas(data))
        .catch((err) => console.error(err));
    }
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="perfil-container">
      <h2>Perfil de Cliente</h2>
      {usuario && (
        <div>
          <p>Usuario: {usuario.user}</p>
          <p>Rol: {usuario.rol}</p>
        </div>
      )}

      <h3>Mis Citas</h3>
      {citas.length === 0 ? (
        <p>No tienes citas registradas.</p>
      ) : (
        <ul className="citas-lista">
          {citas.map((cita) => (
            <li key={cita.id} className="cita-item">
              <p>Barbero: {cita.barbero}</p>
              <p>Fecha: {cita.fecha}</p>
              <p>Hora: {cita.hora}</p>
              <p>Servicio: {cita.servicio}</p>
            </li>
          ))}
        </ul>
      )}

      <button onClick={cerrarSesion} className="btn-cerrar-sesion">
        Cerrar sesión
      </button>
    </div>
    </>
  );
}

export default PerfilCliente;
