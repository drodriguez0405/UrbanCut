import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VistaPublica from '../pages/VistaPublica';
import RegistrarCita from '../pages/RegistrarCita';
import PanelAdmin from '../pages/PanelAdmin';

function Enrutador(){
    return(
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<VistaPublica />} />
        <Route path="/Reserva" element={<RegistrarCita />} />
        <Route path="/Panel" element={<PanelAdmin />} />
      </Routes>
    </BrowserRouter>
    )
}
export default Enrutador