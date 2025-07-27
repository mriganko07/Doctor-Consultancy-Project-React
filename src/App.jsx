import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserLogin from './components/Login/UserLogin.jsx'
import "@lottiefiles/lottie-player";
import DoctorLogin from './components/Login/DoctorLogin.jsx'
import AdminLogin from './components/Login/AdminLogin.jsx'


function App() {

  return (<>
    {/* <UserLogin></UserLogin> */}
    {/* <DoctorLogin></DoctorLogin> */}
    <AdminLogin></AdminLogin>
  </>
  )
}

export default App
