import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import About from './pages/About'
import Home from './pages/Home'
import Play from './pages/Game'
import Login from './pages/Login'
import Register from './pages/Register'

import GlobalStyle from './styles/GlobalStyle'

const StyledApp = styled.div`
  width: 1024px;

  margin: 0 auto;
`

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <StyledApp>
        <GlobalStyle />
        <Router>
          <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Switch>
            <Route exact path='/'>
              {isLoggedIn ? <Play /> : <Home />}
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/login'>
              <Login setIsLoggedIn={setIsLoggedIn} />
            </Route>
            <Route path='/register'>
              <Register setIsLoggedIn={setIsLoggedIn} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </StyledApp>
  );
}

export default App;
