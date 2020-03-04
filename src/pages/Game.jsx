import React, { useEffect } from 'react';
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
    const cb = direction => {
        alert(direction);
    }

    useEffect(() => {
        const listener = e => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                if (e.key === 'ArrowUp') {
                    return cb('N');
                } else if (e.key === 'ArrowDown') {
                    return cb('S');
                } else if (e.key === 'ArrowLeft') {
                    return cb('W')
                } else if (e.key === 'ArrowRight') {
                    return cb('E')
                }
            }
        }
        document.addEventListener('keydown', listener);
        return () => {
            document.removeEventListener('keydown', listener);
        }
    });

    return (
        <StyledGame>
            <div id='left'>
                <Map />
            </div>
            <div id='right'>
                <RoomDetail />
                <Controller callback={cb} />
                <Chat />
            </div>
        </StyledGame>
    );
}

export default Game;