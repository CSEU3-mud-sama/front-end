import React from 'react';

const StyledRegister = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 2rem;
        font-weight: bold;
    }
`

function Register() {
    return (
        <StyledRegister>
            <h1>Register</h1>
            <label htmlFor="username">Username:</label>
            <input id='username' type="text"/>
            <label htmlFor="password">Password:</label>
            <input id='password' type="text"/>
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input id='confirm-password' type="text"/>
            <button>Register</button>
            <div>
                or <a href="#">login</a>
            </div>
        </StyledRegister>
    );
}

export default Register;