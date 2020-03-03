import React from 'react';

import StyledPanel from '../styles/RightPanel'

function RoomDetail(props) {
    return (
        <StyledPanel>
            <h2>Room Detail</h2>
            <p><span>Name: </span>{props.name}</p>
            <p><span>Description: </span>{props.description}</p>
            <p><span>Items: </span>{props.items}</p>
            <p><span>Players: </span>{props.players}</p>
        </StyledPanel>
    );
}

export default RoomDetail;