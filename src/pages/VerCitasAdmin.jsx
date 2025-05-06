import "./VerCitasAdmin.css"
import { useEffect, useState } from "react";

function VerCitasAdmin(){
    const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetch("https://urbancut.onrender.com/citas")
      .then((res) => res.json())
      .then((data) => setCitas(data))
      .catch((err) => console.error(err));
  }, []);
    return(
        <>
        <div style={{ padding: "2rem" }}>
      <h2>Listado de Citas Registradas</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Barbero</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Servicio</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id}>
              <td>{cita.id}</td>
              <td>{cita.cliente}</td>
              <td>{cita.barbero}</td>
              <td>{cita.fecha}</td>
              <td>{cita.hora}</td>
              <td>{cita.servicio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
    )
}
export default VerCitasAdmin;