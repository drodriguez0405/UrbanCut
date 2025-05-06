import "./PanelAdmin.css"
function PanelAdmin(){
    return(
        <>
        <div className="admin-container">
      <header className="admin-header">
        <h1>Panel de Administración</h1>
        <p>Bienvenido, administrador</p>
      </header>

      <section className="admin-opciones">
        <button className="admin-btn">Ver Citas</button>
        <button className="admin-btn">Gestionar Usuarios</button>
        <button className="admin-btn">Configuraciones</button>
      </section>
    </div>
        </>
    )
}

export default PanelAdmin;