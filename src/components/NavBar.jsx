import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    
    background: grey;
    color: white;

    h1 {
        font-size: 1.7rem;
        font-weight: bold;
    }

    ul {
        display: flex;
    }

    li {
        list-style-type: none;
        margin-left: 0.5rem;
    }
`

function NavBar() {
    return (
        <StyledNavBar>
            <h1>Logo</h1   >
            <div>
                <ul>
                    <li>About</li>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </div>
        </StyledNavBar>
    );
}

export default NavBar;