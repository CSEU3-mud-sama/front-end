import React from "react";
import styled from 'styled-components';

import NavBar from "./components/NavBar";
import RoomDetail from "./components/RoomDetail";
import Navigation from "./components/Navigation";
import Map from "./components/Map";
import Chat from "./components/Chat";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;

  #game-container {
    display: flex;
    margin: 0 auto;

    #left {
      width: 60vw;
      height: 60vw;
      border: 1px red solid;
    }

    #right {
      width: 20vw;
      height: 60vw;
      border: 1px red solid;
      display: flex;
      flex-direction: column;
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
