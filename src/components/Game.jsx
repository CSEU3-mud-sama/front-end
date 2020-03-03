import React from 'react';

import Map from './Map'
import RoomDetail from './RoomDetail'
import Controller from './Controller'
import Chat from './Chat'

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