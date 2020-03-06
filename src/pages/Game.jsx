import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../axios'

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
    const [mapData, setMapData] = useState([]);
    const [currentRoom, setCurrentRoom] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const listener = e => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                if (e.key === 'ArrowUp') {
                    return cb('n');
                } else if (e.key === 'ArrowDown') {
                    return cb('s');
                } else if (e.key === 'ArrowLeft') {
                    return cb('w')
                } else if (e.key === 'ArrowRight') {
                    return cb('e')
                }
            }
        }
        document.addEventListener('keydown', listener);
        return () => {
            document.removeEventListener('keydown', listener);
        }
    });

    useEffect(() => {
        setIsLoading(true);
        axiosWithAuth()
            .get('/api/adv/init')
            .then(res => {
                setCurrentRoom(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                alert(err.message);
            })
    }, []);

    useEffect(() => {
        setIsLoading(true);
        axiosWithAuth()
            .get('/api/adv/rooms/')
            .then(res => {
                setMapData(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                alert(err.message);
            })
    }, []);


    const cb = direction => {
        setIsLoading(true);
        axiosWithAuth()
            .post('/api/adv/move', { direction })
            .then(res => {
                setCurrentRoom(res.data)
                setIsLoading(false);
            })
            .catch(err => {
                alert(err.message);
            })
    }

    return (
        <StyledGame>
            <div id='left'>
                <Map mapData={mapData} currentRoom={currentRoom} isLoading={isLoading} />
            </div>
            <div id='right'>
                <RoomDetail currentRoom={currentRoom} />
                <Controller callback={cb} />
                <Chat />
            </div>
        </StyledGame>
    );
}

export default Game;