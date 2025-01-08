import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Typewriter from "typewriter-effect";
import Sidebar from '../components/Sidebar';

const Dashboard = () => {

  const [totalEmployees, setTotalEmployees] = useState(0);

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if(storedEmployees){
      const employeeList = JSON.parse(storedEmployees);
      setTotalEmployees(employeeList.length);
    }
  }, [])
    const now = new Date();
    const hour = now.getHours();

    const getGreetingMessage = () => {
      if(hour >= 0 && hour <= 12){
        return "Good Morning☀️,";
      }
      else if(hour >= 12 && hour < 18){
        return "Good Afternoon☀️,";
      }
      else{
        return "Good Evening🌛,";
      }
    }
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    const countByDepartment = {};

    employees.forEach(employee =>{
      const department = employee.department;

      countByDepartment[department] = (countByDepartment[department] || 0) + 1;
    });
  
  return (
    <div className='dashboard'>
      
      <p className='greeting-message'><Typewriter
          options={{
            strings: [getGreetingMessage()],
            autoStart: true,
            loop: false,
            delay: 50,
            deleteSpeed:Infinity,
            cursor: "",
          }}
        />
        </p>

      <div className='dashboard-cards'>
        <p className='card-header'>Employees <i className='bx bx-user'></i></p>
        <br />
        <p>Total employees:{totalEmployees}</p>
        <p>Active employees: {totalEmployees}</p>
        
      </div>
      <div className='dashboard-cards'>
        <p className='card-header'>Departments <i className='bx bx-briefcase'></i></p>
        <ul>
          {Object.entries(countByDepartment).map(([department, count]) => (
            <li key={department}>{department}: {count}</li>
          ))}
          
        </ul>
      </div>
        
    </div>
  )
}

export default Dashboard