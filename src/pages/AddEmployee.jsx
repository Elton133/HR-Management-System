import React from 'react'
import 'boxicons/css/boxicons.min.css';

import { useState } from 'react'
import './AddEmployee.css'

const AddEmployee = () => {
  const [employee, setEmployee] = useState({name: "", email: "", position: "", department: "", startDate: ""});

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setEmployee({...employee, [name]: value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    localStorage.setItem("employees", JSON.stringify([...employees, employee]));
    alert("Employee added successfully");
  };
  return (
    <>
    
    <div className='header'>
      <h3>Add Employee</h3>
    <p>Create a new contract for employee</p></div>
    
    <form className="add-employee-form" onSubmit={handleSubmit}>
      <p>Personal Detail <i className='bx bx-user'></i></p>
      <div className='input-wrapper'>
        <input className="input-box" type="text" name='name' placeholder='Name' 
      onChange={handleChange} required />
      <i className='bx bx-user'></i>
      </div>
      
      <p>Work Details <i className='bx bx-briefcase'></i></p>
    <div className='input-wrapper'>
    <input 
    type="email" 
    name="email" 
    placeholder="Email" 
    onChange={handleChange} 
    required 
    className="input-with-icon" 
  />
  <i className='bx bx-envelope'></i>
  </div>
  <div className='input-wrapper'>
  <input className="input-box" type="text" name='position' placeholder='Position' onChange={handleChange} required/>
  <i className='bx bx-briefcase'></i>
  </div>
      
      <div className='input-wrapper'>
      <input type="text" name="department" placeholder='Department' onChange={handleChange} required/>
      <i className='bx bx-briefcase'></i>
      </div>
      
      <div className="date-picker-container">
  <input 
    type="date" 
    name="startDate" 
    id="startDate" 
    onChange={handleChange} 
    required 
    className="date-input"
    placeholder='Date'
  />
</div>

      <button className='get-started' type='submit'>Add Employee</button>
    </form>
    </>
  )
}

export default AddEmployee