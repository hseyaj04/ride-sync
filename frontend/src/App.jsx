import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {CaptainLogin, CaptainRegister, Home, UserLogin, UserRegister} from './pages/index'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-register" element={<UserRegister />} />
        <Route path="/captain-register" element={<CaptainRegister />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
      </Routes>
    </div>
  )
}

export default App