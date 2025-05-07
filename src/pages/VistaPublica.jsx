import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../public/img/FondoUrbanCut.png"
import "./VistaPublica.css"

function VistaPublica() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    setUsuario(usuarioGuardado);
  }, []);  

    return(
        <>
        <div className="inicio-container">
        <div className="overlay"></div>

        <header className="inicio-contenido">
          <img src="../../public/img/LogoUrbanCut.png.png" alt="Logo UrbanCut" className="logo" />
          <h1>¡NO ERES FEO, SIMPLEMENTE TIENES UN MAL CORTE!</h1>

          <div className="botones">
            <Link to="/Reserva" className="btn-reserva">¡HAZ TU RESERVA!</Link>
            {usuario && (
              <Link to="/perfil" className="btn-reserva">Mi Perfil</Link>
            )}
          </div>
        </header>
      </div>
        </>
    )
}

export default VistaPublica;