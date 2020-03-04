import React from 'react';
import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;

    height: 3rem;
    
    background: #512E5F;
    color: #F5EEF8;
`

function Footer() {
    return (
        <StyledFooter>Developed by Amira, Ayomide, Mike and Shaun -- Lambda School CS BW1 (March 2020)</StyledFooter>
    );
}

export default Footer;