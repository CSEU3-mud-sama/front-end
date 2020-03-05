import React from 'react';
import styled from 'styled-components';

import LeftPanel from '../styles/LeftPanel'

const StyledMap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 6rem;

    .row {
        display: flex;
        height: 11rem;
    }

    .cell {
        flex-grow: 1;
    }

    .top {
        border-bottom: 1px solid blue;
    }

    .bottom {
        border-top: 1px solid blue;
    }

    .left {
        border-right: 1px solid blue;
    }

    .right {
        border-left: 1px solid blue;
    }
`

function Map(props) {
    return (
        <LeftPanel>
            <h2>Map</h2>
            <StyledMap>
                <div className='row'>
                    <div className='cell top left'></div>
                    <div className='cell center'></div>
                    <div className='cell top right'></div>
                </div>
                <div className='row'>
                    <div className='cell mid'></div>
                    <div className='cell mid center'></div>
                    <div className='cell mid'></div>
                </div>
                <div className='row'>
                    <div className='cell bottom left'></div>
                    <div className='cell center'></div>
                    <div className='cell bottom right'></div>
                </div>
            </StyledMap>
        </LeftPanel>
    );
}

export default Map;