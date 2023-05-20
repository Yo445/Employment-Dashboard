import React from 'react';
import "./Login.css"
const Login = () => {
    return (
        <div className='login'>
        <h1>Welcome</h1>
        <h3>Login</h3>
        <form>
            <input type={'email'} placeholder='Email' />
            <input type={'password'} placeholder='Password' />
            <button type={'submit'}>Login</button>
        </form>       
        
        </div>
    );
};

export default Login;