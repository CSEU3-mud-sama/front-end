import React from "react";
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

  const isLoggedIn = localStorage.getItem('key') ? true: false;

  return (
      <StyledApp>
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
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </StyledApp>
  );
}

export default App;
