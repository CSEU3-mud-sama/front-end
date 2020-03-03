import React from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import RoomDetail from "./components/RoomDetail";
import Navigation from "./components/Navigation";
import Map from "./components/Map";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="left">
        <Map />
      </div>
      <div id="right">
        <RoomDetail />
        <Navigation />
        <Chat />
      </div>
    </div>
  );
}

export default App;
