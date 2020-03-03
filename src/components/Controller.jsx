import React from 'react';

import RightPanel from '../styles/RightPanel'

function Controller(callback) {
    return (
        <RightPanel>
            <h2>Controller</h2>
            <div id='controller'>
                <div id="north">
                    <button>N</button>
                </div>
                <div id="east">
                    <button>E</button>
                </div>
                <div id="south">
                    <button>S</button>
                </div>
                <div id="west">
                    <button>W</button>
                </div>
            </div>
        </RightPanel>
    );
}

export default Controller;