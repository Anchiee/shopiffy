import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SessionContextProvider from './ContextsProviders/SessionContextProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import PopUpContextProvider from './ContextsProviders/PopUpContextProvider.jsx'
import PopUpOptionContextProvider from './ContextsProviders/PopUpOptionContextProvider.jsx'
import ProductContextProvider from './ContextsProviders/ProductContextProvider.jsx'
import CartContextProvider from './ContextsProviders/CartContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
    <SessionContextProvider>
    <PopUpContextProvider>
    <PopUpOptionContextProvider>
    <ProductContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </CartContextProvider>
    </ProductContextProvider>
    </PopUpOptionContextProvider>
    </PopUpContextProvider>
    </SessionContextProvider>
    </StrictMode>
  
)
