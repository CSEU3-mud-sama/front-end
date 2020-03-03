import React from 'react';

function RoomDetail(props) {
    return (
        <div>
            <h2>Room Detail</h2>
            <p>Name: {props.name}</p>
            <p>Description: {props.description}</p>
            <p>Items: {props.items}</p>
            <p>Players: {props.players}</p>
        </div>
    );
}

export default RoomDetail;