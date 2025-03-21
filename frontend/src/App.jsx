import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {CaptainRiding, Riding, UserLogout, CaptainLogout, CaptainProtectedWrapper, UserProtectedWrapper, CaptainLogin, CaptainHome, CaptainRegister, Start, UserLogin, UserRegister, Home} from './pages/index'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/riding" element={<Riding />} />

        <Route path="/captain-riding" element={<CaptainRiding />} />

        <Route path="/user-register" element={<UserRegister />} />

        <Route path="/user-logout" element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />

        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />



        <Route path="/captain-register" element={<CaptainRegister />} />

        <Route path="/captain-login" element={<CaptainLogin />} />

        <Route path="/captain-home" element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>
        } />

        <Route path="/captain-logout" element={
          <CaptainProtectedWrapper>
            <CaptainLogout />
          </CaptainProtectedWrapper>
        } />
        

      </Routes>
    </div>
  )
}

export default App