import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../public/img/FondoUrbanCut.png";

import "./VistaPublica.css";

function VistaPublica() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      try {
        const usuarioParseado = JSON.parse(usuarioGuardado);
        console.log("Usuario guardado:", usuarioParseado); 
        setUsuario(usuarioParseado);
      } catch {
        setUsuario(null);
      }
    } else {
      setUsuario(null);
    }
  }, []);
  return (
    <>
      <div className="inicio-container">
        <div className="overlay"></div>

        <header className="inicio-contenido">
          <img
            src="../../public/img/LogoUrbanCut.png"
            alt="Logo UrbanCut"
            className="logo"
          />
          <h1>¡NO ERES FEO, SIMPLEMENTE TIENES UN MAL CORTE!</h1>

          <div className="botones">
            <button
              onClick={() => navigate("/Reserva")}
              className="btn-reserva"
            >
              ¡HAZ TU RESERVA!
            </button>
            {usuario && (
  <button onClick={() => navigate("/perfil")} className="btn-perfil">
    Mi Perfil
  </button>
)}
          </div>
        </header>
      </div>
    </>
  );
}

export default VistaPublica;
