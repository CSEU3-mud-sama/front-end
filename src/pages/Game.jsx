import React from 'react';
import styled from 'styled-components';

import Map from '../components/Map'
import RoomDetail from '../components/RoomDetail'
import Controller from '../components/Controller'
import Chat from '../components/Chat'

const StyledGame = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    #left {
        width: 75%;
    }

    #right {
        width: 25%;

        display: flex;
        flex-direction: column;
    }
`

function Game() {
    return (
        <StyledGame>
            <div id='left'>
                <Map />
            </div>
            <div id='right'>
                <RoomDetail />
                <Controller />
                <Chat />
            </div>
        </StyledGame>
    );
}

export default Game;