/* eslint-disable react/prop-types */
import React, { useState }  from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../axios/config';

import LoginRegister from '../styles/LoginRegister'

function Register({ history, setIsLoggedIn }) {
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
            .post(`${baseURL}/api/registration/`, formValues)
            .then(res => {
                localStorage.setItem('key', res.data.key);
                setIsLoggedIn(true);
                history.push('/');
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <LoginRegister>
            <div>
                <h2>Register</h2>
                <label htmlFor="username">Username</label>
                <input id='username' type="text" name="username" onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input id='password' type="password" name="password1" onChange={handleChange} />
                <label htmlFor="confirm-password">Confirm Password</label>
                <input id='confirm-password' type="password" name="password2" onChange={handleChange} />
                <button onClick={handleSubmit} >Register</button>
                <p>or <Link to='/login'>login</Link></p>
            </div>
        </LoginRegister>
    );
}

export default withRouter(Register);