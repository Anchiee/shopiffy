import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./Style/main.css"
import SessionContextProvider from './ContextsProviders/SessionContextProvider.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <SessionContextProvider>
        <App/>
      </SessionContextProvider>
    </StrictMode>
  
)
