import React from 'react';
import styled from 'styled-components';

import logo from '../images/tq.jpeg';

const StyledHome = styled.div`
    margin: 3rem 0;
    background: url(${logo}) no-repeat center center;
    background-size: contain;
    height: 40rem;
`

function Home() {
    return (
        <StyledHome />
    );
}

export default Home;