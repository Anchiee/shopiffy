import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SessionContextProvider from './ContextsProviders/SessionContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import PopUpContextProvider from './ContextsProviders/PopUpContextProvider.jsx'
import PopUpOptionContextProvider from './ContextsProviders/PopUpOptionContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <SessionContextProvider>
        <PopUpContextProvider>
          <PopUpOptionContextProvider>
            <BrowserRouter>
              <App/>
            </BrowserRouter>
          </PopUpOptionContextProvider>
        </PopUpContextProvider>
      </SessionContextProvider>
    </StrictMode>
  
)
