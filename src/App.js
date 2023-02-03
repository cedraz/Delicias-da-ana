import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Produtos from './pages/Produtos';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/produtos' element={<Produtos/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
