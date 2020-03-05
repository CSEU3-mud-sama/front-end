/* eslint-disable react/prop-types */
import React from 'react';

import RightPanel from '../styles/RightPanel'

function Controller({ callback }) {
    const handleClick = e => {
        callback(e.target.name);
    }

    return (
        <RightPanel>
            <h2>Controller</h2>
            <div id='controller'>
                <div id="north">
                    <button name='n' onClick={handleClick} >N</button>
                </div>
                <div id="east">
                    <button name='e' onClick={handleClick} >E</button>
                </div>
                <div id="south">
                    <button name='s' onClick={handleClick} >S</button>
                </div>
                <div id="west">
                    <button name='w' onClick={handleClick} >W</button>
                </div>
            </div>
        </RightPanel>
    );
}

export default Controller;