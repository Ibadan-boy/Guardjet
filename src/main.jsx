import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartContentProvider from './API/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContentProvider>
    <App />
    </CartContentProvider>
  </StrictMode>,
)
