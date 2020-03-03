import React from 'react';

import RightPanel from '../styles/RightPanel'

function ControllerButton(label, callback) {
    return (
        <button onClick={callback}>{label}</button>
    )
}

function Controller(callback) {
    return (
        <RightPanel>
            <h2>Controller</h2>
            {['N', 'S', 'E', 'W'].map(label => ControllerButton(label, callback))}
        </RightPanel>
    );
}

export default Controller;