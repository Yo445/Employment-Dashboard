import "./Signup.css";
import React from 'react';

const Signup = () => {
    
    return (
        <div className='signup'>
            <h1>Join us</h1>
        <h3>Sign up</h3>
        <form>
            <input type={'email'} placeholder='Email' />
            <input type={'password'} placeholder='Password' />
            <input type={'password'} placeholder='Confirm Password'/>
            <button type={'submit'}>Sign up</button>
        </form>       
        </div>   
    );
};

export default Signup;