import React from 'react';
import styled from 'styled-components'

const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 2rem;
        font-weight: bold;
    }
`

function Login() {
    return (
        <StyledLogin>
            <h1>Login</h1>
            <label htmlFor="username">Username:</label>
            <input id='username' type="text"/>
            <label htmlFor="password">Password:</label>
            <input id='password' type="text"/>
            <button>Login</button>
            <div>
                or <a href="#">register</a>
            </div>
        </StyledLogin>
    );
}

export default Login;