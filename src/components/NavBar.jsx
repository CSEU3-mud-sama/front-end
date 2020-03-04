/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;

    height: 3rem;
    
    background: #512E5F;

    a {
        text-decoration: none;
        color: #F5EEF8;
    }

    h1 {
        font-size: 1.5rem;
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

function NavBar({ isLoggedIn, setIsLoggedIn }) {
    return (
        <StyledNavBar>
            <h1>
                <Link to='/'>
                    Treasure Quest
                </Link>
            </h1>
            <div>
                <ul>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    {
                        isLoggedIn 
                        ? <li>
                            <Link to='/login' onClick={() => {
                                localStorage.removeItem('key');
                                setIsLoggedIn(false);
                            }} >Logout</Link>
                        </li>
                        : <>
                            <li>
                                <Link to='/login'>
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to='/register'>
                                    Register
                                </Link>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </StyledNavBar>
    );
}

export default NavBar;