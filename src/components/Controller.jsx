import React from 'react';

function ControllerButton(label, callback) {
    return (
        <button onClick={callback}>{label}</button>
    )
}

function Controller(callback) {
    return (
        <div>
            <h2>Controller</h2>
            {['N', 'S', 'E', 'W'].map(label => ControllerButton(label, callback))}
        </div>
    );
}

export default Controller;