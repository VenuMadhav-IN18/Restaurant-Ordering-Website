import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Register from './pages/Register.jsx';

function App() {
 

  return (
    <>
      <h1>Hotel Management System</h1>
      <p>Welcome to the Hotel Management System. Please register or login to continue.</p>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
