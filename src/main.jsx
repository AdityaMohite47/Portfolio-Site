import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/raleway'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'
import './index.css'
import App from './App.jsx'

// Reveal styles only hide content once JS is known to run.
document.documentElement.classList.add('js')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
