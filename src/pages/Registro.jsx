import "./Registro.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro(){
    const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoUsuario = {
      nombre,
      user: usuario,
      password,
      rol: "cliente",
    };

    fetch("https://urbancut.onrender.com/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    })
      .then((res) => {
        if (res.ok) {
          alert("Usuario registrado correctamente");
          navigate("/login");
        }
      })
      .catch((err) => console.error(err));
  };

    return(
        <>
        <div className="registro-container">
      <h2>Registro de usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="email"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
        </>
    )
}

export default Registro