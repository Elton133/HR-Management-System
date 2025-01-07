// import React from 'react'
// import { Link } from 'react-router-dom'
// import './LandingPage.css'
// import main from '../assets/images/main.png'
// import image1 from '../assets/images/image1.png'
// import image2 from '../assets/images/image2.jpg'
// const LandingPage = () => {
//   return (
//     <div className='landing-page'>
//         <img className='main-image' src={main} alt='main' />
//         <p>Add, edit, and manage</p>
//         <img className='top-right-image' src={image1} alt="" />
//         <img className='top-left-image' src={image2} alt="" />
//         <p>all in one place</p>
//         <p>Efficiently manage your team all in one place</p>
//         <span className="get-started">
//           <Link className="get-started" to="/add-employee">Get Started</Link>
//         </span>
//     </div>
//   )
// }

// export default LandingPage




import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "./LandingPage.css";
import main from "../assets/images/main.png";
import main1 from "../assets/images/stanbic.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.jpg";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img className="main-image" src={main1} alt="main" />
      
      <p className="typing-text">
        <Typewriter
          options={{
            strings: ["Add, edit, and manage"],
            autoStart: true,
            loop: false,
            delay: 50,
            deleteSpeed:Infinity,
            cursor: "",
          }}
        />
      </p>
      <p className="typing-text">
        <Typewriter
          options={{
            strings: [ "all in one place"],
            autoStart: true,
            loop: false,
            delay: 50,
            deleteSpeed:Infinity,
            cursor: "",
          }}
        />
      </p>

      <p className="typing-text">
        <Typewriter
          options={{
            strings: ["Efficiently manage your team all in one place"],
            autoStart: true,
            loop: false,
            delay: 55,
            deleteSpeed:Infinity,
            cursor: "",
          }}
        />
      </p>

      <span className="get-started">
        <Link className="get-started" to="/dashboard">Get Started
        </Link>
      </span>
    </div>
  );
};

export default LandingPage;
