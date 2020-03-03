import React from 'react';

import RightPanel from '../styles/RightPanel'

function RoomDetail(props) {
    return (
        <RightPanel>
            <h2>Room Detail</h2>
            <p><span>Name: </span>{props.name}</p>
            <p><span>Description: </span>{props.description}</p>
            <p><span>Items: </span>{props.items}</p>
            <p><span>Players: </span>{props.players}</p>
        </RightPanel>
    );
}

export default RoomDetail;