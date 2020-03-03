import React from 'react';

import Map from '../components/Map'
import RoomDetail from '../components/RoomDetail'
import Controller from '../components/Controller'
import Chat from '../components/Chat'

function Game() {
    return (
        <div>
            <div>
                <Map />
            </div>
            <div>
                <RoomDetail />
                <Controller />
                <Chat />
            </div>
        </div>
    );
}

export default Game;