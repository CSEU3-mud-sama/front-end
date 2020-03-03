import React from 'react';
import { Link } from 'react-router-dom';

import LoginRegister from '../styles/LoginRegister'

function Login() {
    return (
        <LoginRegister>
            <div>
                <h2>Login</h2>
                <label htmlFor="username">Username</label>
                <input id='username' type="text"/>
                <label htmlFor="password">Password</label>
                <input id='password' type="password"/>
                <button>Login</button>
                <p>or <Link to='/register'>register</Link></p>
            </div>
        </LoginRegister>
    );
}

export default Login;