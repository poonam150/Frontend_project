import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
      </Routes>
    </div>
  )
}

export default App
