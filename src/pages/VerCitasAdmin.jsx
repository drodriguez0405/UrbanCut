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
        <div className="ver-citas-container">
            <h2>Listado de Citas Registradas</h2>
            <table className="ver-citas-table">
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