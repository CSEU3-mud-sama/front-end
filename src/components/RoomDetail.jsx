/* eslint-disable react/prop-types */
import React from 'react';

import RightPanel from '../styles/RightPanel'

function RoomDetail({ currentRoom: {title: name, description, players} }) {
    return (
        <RightPanel>
            <h2>Room Detail</h2>
            <p><span>Name: </span>{name}</p>
            <p><span>Description: </span>{description}</p>
            <p><span>Other players in this room: </span>{players && players.length}</p>
        </RightPanel>
    );
}

export default RoomDetail;