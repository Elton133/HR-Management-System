import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import Navbar1 from './components/Navbar1'
import Dashboard from './pages/Dashboard'
import ViewEmployees from './pages/ViewEmployees'
import AddEmployee from './pages/AddEmployee'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/add-employees" element={<AddEmployee/>}></Route>
        <Route path="/view-employees" element={<ViewEmployees/>}></Route>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App