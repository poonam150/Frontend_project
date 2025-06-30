import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Registration from './pages/reg';
import Cart from './pages/Cart';
import Footer from './pages/Footer';
import Categories from './pages/Categories';
import Offer from './pages/Offer';
import Contact from './pages/Contact';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reg" element={<Registration/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="/categories" element={<Categories/>}/>
         <Route path="/offer" element={<Offer/>}/>
         <Route path="/contact" element={<Contact/>}/>


      </Routes>
      <Footer/>
    </div>
  )
}

export default App
