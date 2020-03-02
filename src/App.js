import React from 'react';
import './App.css';

import NavBar from './components/navbar'
import RoomDetail from './components/roomDetail'
import Navigation from './components/navigation'
import Map from './components/map'
import Chat from './components/chat'

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
