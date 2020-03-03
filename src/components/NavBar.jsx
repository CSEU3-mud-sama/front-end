import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: gray;
    margin: 0 auto;
    padding: 15px 40px;
    color: white;

    #logo {
        font-weight: bold;
        font-size: 2rem;
    }

    #links {
        ul {
            display: flex;
            justify-content: flex-end;
            li {
                font-size: 1.2rem;
                list-style-type: none;
                margin-left: 20px;
            }
        }
    }
`

function NavBar() {
    return (
        <StyledNav>
            <div id='logo'>Treasure Quest</div>
            <div id='links'>
                <ul>
                    <li>About</li>
                    <li>Register</li>
                    <li>Login</li>
                </ul>
            </div>
        </StyledNav>
    );
}

export default NavBar;