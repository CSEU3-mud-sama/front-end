import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import About from './pages/About'
import Play from './pages/Game'
import Home from './pages/Home'

import GlobalStyle from './styles/GlobalStyle'

function App() {

  const isLoggedIn = true;

  return (
      <div className='app'>
        <GlobalStyle />
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              {isLoggedIn ? <Play /> : <Home />}
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
