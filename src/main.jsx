import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './pages/VistaPublica.jsx'
import Enrutador from './router/Enrutador.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Enrutador/>
  </StrictMode>,
)
