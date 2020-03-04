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
                    <button name='N' onClick={handleClick} >N</button>
                </div>
                <div id="east">
                    <button name='E' onClick={handleClick} >E</button>
                </div>
                <div id="south">
                    <button name='S' onClick={handleClick} >S</button>
                </div>
                <div id="west">
                    <button name='W' onClick={handleClick} >W</button>
                </div>
            </div>
        </RightPanel>
    );
}

export default Controller;