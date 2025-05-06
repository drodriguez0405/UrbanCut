import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VistaPublica from '../pages/VistaPublica';
import RegistrarCita from '../pages/RegistrarCita';
import PanelAdmin from '../pages/PanelAdmin';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import VerCitasAdmin from '../pages/VerCitasAdmin';
function Enrutador(){
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<VistaPublica />} />
        <Route path="/Reserva" element={<RegistrarCita />} />
        <Route path="/Panel" element={<PanelAdmin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/Panel/citas" element={<VerCitasAdmin />} />
      </Routes>
    </BrowserRouter>
    )
}
export default Enrutador