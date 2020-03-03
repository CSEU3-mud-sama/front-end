import React from 'react';

import StyledPanel from '../styles/RightPanel'

function ControllerButton(label, callback) {
    return (
        <button onClick={callback}>{label}</button>
    )
}

function Controller(callback) {
    return (
        <StyledPanel>
            <h2>Controller</h2>
            {['N', 'S', 'E', 'W'].map(label => ControllerButton(label, callback))}
        </StyledPanel>
    );
}

export default Controller;