/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import LeftPanel from '../styles/LeftPanel'
import Spinner from '../styles/Spinner';

const StyledMap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 6rem;

    .row {
        display: flex;
        height: 11rem;
    }

    .cell {
        width: 11rem;
        text-align: center;
        line-height: 11rem;
    }

    .top {
        border-bottom: 1px solid blue;
    }

    .bottom {
        border-top: 1px solid blue;
    }

    .left {
        border-right: 1px solid blue;
    }

    .right {
        border-left: 1px solid blue;
    }
`

function Map( { currentRoom, mapData, isLoading } ) {
    debugger
    const roomData = {}

    mapData.map(mapItem => roomData[mapItem.pk] = {
                title: mapItem.fields.title, 
                n: mapItem.fields.n_to, 
                s: mapItem.fields.s_to, 
                e: mapItem.fields.e_to, 
                w: mapItem.fields.w_to
            });
        
    const currentRoomId = Number(Object.keys(roomData).filter(key => roomData[key].title === currentRoom.title)[0])

    const north = currentRoomId ? roomData[currentRoomId].n : null;
    const south = currentRoomId ? roomData[currentRoomId].s : null;
    const east = currentRoomId ? roomData[currentRoomId].e : null;
    const west = currentRoomId ? roomData[currentRoomId].w : null;

    return (
        <LeftPanel>
            <h2>Map</h2>
            {
                isLoading
                ? <Spinner />
                : <StyledMap>
                    <div className='row'>
                        <div className='cell top left'></div>
                        <div className='cell center'>{north ? roomData[north].title : null}</div>
                        <div className='cell top right'></div>
                    </div>
                    <div className='row'>
                        <div className='cell mid'>{west ? roomData[west].title : null}</div>
                        <div className='cell'>{currentRoomId ? roomData[currentRoomId].title : null}</div>
                        <div className='cell mid'>{east ? roomData[east].title : null}</div>
                    </div>
                    <div className='row'>
                        <div className='cell bottom left'></div>
                        <div className='cell center'>{south ? roomData[south].title : null}</div>
                        <div className='cell bottom right'></div>
                    </div>
                </StyledMap>
            }
        </LeftPanel>
    );
}

export default Map;