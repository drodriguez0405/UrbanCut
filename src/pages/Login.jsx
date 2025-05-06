import "./Login.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://urbancut.onrender.com/usuarios")
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.error("Error al obtener usuarios", err));
  }, []);
  const iniciarSesion = () => {
    const userFound = usuarios.find(
      (u) => u.user === userInput && u.password === passwordInput
    );
    if (userFound) {
        localStorage.setItem("usuario", JSON.stringify(userFound));
        localStorage.setItem("token", "fake-token-123");
  
        if (userFound.rol === "admin") {
          navigate("/panel");
        } else {
          navigate("/cliente");
        }
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    };
    return(
        <>
            <div className="login-container">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button onClick={iniciarSesion}>Ingresar</button>
      </div>
    </div>
        </>
    )
}

export default Login;