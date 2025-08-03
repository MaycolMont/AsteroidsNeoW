// utilizamos el react dom para tener un enlace con el
// html principal de la aplicación

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


// importamos el componente del archivo correspondiente
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
