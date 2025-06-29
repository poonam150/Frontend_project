import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
