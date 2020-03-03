import React from 'react';
import { Link } from 'react-router-dom';

import LoginRegister from '../styles/LoginRegister'

function Register() {
    return (
        <LoginRegister>
            <div>
                <h2>Register</h2>
                <label htmlFor="username">Username</label>
                <input id='username' type="text"/>
                <label htmlFor="password">Password</label>
                <input id='password' type="password"/>
                <label htmlFor="confirm-password">Confirm Password</label>
                <input id='confirm-password' type="password"/>
                <button>Register</button>
                <p>or <Link to='/login'>login</Link></p>
            </div>
        </LoginRegister>
    );
}

export default Register;