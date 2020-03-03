import React from 'react';

function NavButton(label, callback) {
    return (
        <button onClick={callback}>{label}</button>
    )
}

function Navigation(callback) {
    return (
        <div>
            <h2>Controller</h2>
            {['N', 'S', 'E', 'W'].map(label => NavButton(label, callback))}
        </div>
    );
}

export default Navigation;