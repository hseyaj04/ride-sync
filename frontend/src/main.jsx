import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'
import CaptainContext from './context/CaptainContext.jsx' // Use the provider component, not the context object

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <CaptainContext> {/* Use CaptainContext here */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CaptainContext>
    </UserContext>
  </StrictMode>,
)