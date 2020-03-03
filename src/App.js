import React from "react";
import styled from 'styled-components';

import NavBar from "./components/NavBar";
import RoomDetail from "./components/RoomDetail";
import Navigation from "./components/Controller";
import Map from "./components/Map";
import Chat from "./components/Chat";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  #game-container {
    display: flex;
    margin: 0 auto;

    #left {
      width: 60vw;
      height: 60vw;
      border: 1px red solid;
      margin: 3px;
      padding: 5px;
    }

    #right {
      width: 25vw;
      height: 60vw;
      border: 1px red solid;
      display: flex;
      flex-direction: column;
      margin: 3px;
      padding: 5px;
    }
  }
`

function App() {
  return (
    <StyledApp>
      <NavBar />
      <div id='game-container'>
        <div id="left">
          <Map />
        </div>
        <div id="right">
          <RoomDetail />
          <Navigation />
          <Chat />
        </div>
      </div>
    </StyledApp>
  );
}

export default App;
