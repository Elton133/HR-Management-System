import React, { useState,useEffect } from 'react'
import './ViewEmployees.css'
import avatar from '../assets/images/avatar.png'
import wavy from '../assets/images/svg-wave.png'
import wavy1 from '../assets/images/bgg.png'
const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(()=> {
    const storedEmployees = JSON.parse(localStorage.getItem("employees"));
    setEmployees(storedEmployees);
  },[]);
  return (
<div className='view-employees'>
      {employees.map((emp, index) => (
  <div key={index}>
<div className="profile-container">
            <div>
            <div className="card">
                <img className="waves" src={wavy1} alt="" />
                {/* <img className="avatar" src={avatar} alt="" /> */}
                <img className='avatar' src={emp.photo} alt={`${emp.name}'s Photo`}></img>
                <div className='details'>
                    <p className="name">Name: {emp.name}</p>
                    <p className="title"><b>Position</b>: {emp.position}</p>
                    <p className='info'><b>Email</b>:{emp.email}</p>
                    <p className='info'><b>Department</b>: {emp.department}</p>
                    <p className='info'><b>StartDate</b>: {emp.startDate}</p>
                </div>


                <div className='links'>
                    <a id="X" href={"mailto:"+emp.email}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                     <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                    </svg></a>
                </div>

                

            </div>
        </div>
      </div>
      
      </div>
    
  ))}


</div>
  )
}
export default ViewEmployees