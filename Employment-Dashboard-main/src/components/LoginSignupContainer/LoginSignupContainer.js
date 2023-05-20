
import { useRef, useState } from "react";
import React from 'react';
import "./LoginSignupContainer.css";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const LoginSignupContainer = () => {
//defining state to make sure if login or signup is clicked or visible or active
const [login, setLogin] = useState(true);    

//creating refernce for login-signup-container
const LoginSignupContainerRef = useRef(null);

const handleClick = ()=>{
    setLogin(!login);

    //using useRef we can do DOM manuplation
    LoginSignupContainerRef.current.classList.toggle("active");
};
    return (
        <div className='login-signup-container' ref ={LoginSignupContainerRef}>
            <Login />
            <div className='side-div'>
                <button type='button' onClick={handleClick}>
                    {" "}
                    {login ? "Signup": "Login"} 
                </button> 
            </div>
            <Signup />  
        </div>
    );
};

export default LoginSignupContainer;