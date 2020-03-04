/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../axios/config';

import LoginRegister from '../styles/LoginRegister'

function Login({ history, setIsLoggedIn }) {
    const [formValues, setFormValues] = useState({});

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post(`${baseURL}/api/login/`, formValues)
            .then(res => {
                localStorage.setItem('key', res.data.key);
                setIsLoggedIn(true);
                history.push('/');
            })
            .catch(err => {
                alert(err.message);
            });
    }

    return (
        <LoginRegister>
            <div>
                <h2>Login</h2>
                <label htmlFor="username">Username</label>
                <input id='username' type="text" name="username" onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input id='password' type="password" name="password" onChange={handleChange} />
                <button onClick={handleSubmit} >Login</button>
                <p>or <Link to='/register'>register</Link></p>
            </div>
        </LoginRegister>
    );
}

export default withRouter(Login);