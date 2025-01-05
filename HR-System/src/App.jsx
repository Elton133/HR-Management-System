import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddEmployee from './pages/AddEmployee'
import EmployeeList from './pages/EmployeeList'
import LandingPage from './pages/LandingPage'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path="/add-employee" element={<AddEmployee />}></Route>
        <Route path="/employee-list" element={<EmployeeList />}></Route>
      </Routes>
      
    </div>
  )
}

export default App