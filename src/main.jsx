import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

// Ensure dark class is present immediately to avoid a light-mode flash on load
try {
  document.documentElement.classList.add('dark');
} catch (e) {
  // ignore if document is not available
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
