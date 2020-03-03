import React from 'react';

function NavButton(label, callback) {
    return (
        <button onClick={callback}>{label}</button>
    )
}

function Navigation() {
    return (
        <div>
            {['N', 'S', 'E', 'W'].map(label => NavButton(label))}
        </div>
    );
}

export default Navigation;