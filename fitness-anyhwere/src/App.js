import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Help from './components/Help'
import About from './components/About'
import CreateACLass from './components/CreateAClass'
import Classes from './components/Classes'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import {LargeContainer, NavBar, Header, SubHeader, ButtonContainer} from './styling/LandingStyles'
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Router>
           <NavBar>
          <NavLink className='nav' exact to ='/about'> About </NavLink>
          <NavLink className='nav' exact to='/help'> Help </NavLink>
          <NavLink className='nav' exact to ='/login'> Login </NavLink>
          <NavLink className='nav' exact to='/register'> Register </NavLink>
          <NavLink className='nav' exact to='/home'> Home </NavLink>
          <NavLink className='nav' exact to='/class'> Class </NavLink>
          <NavLink className='nav' exact to='/classes'> Classes </NavLink>
          <Header>
            <h1>Anywhere Fitness</h1>
        </Header>
        </NavBar>
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/Help'>
            <Help />
          </Route>
          <Route exact path='/home'>
            <Landing />
          </Route>
          <Route exact path='/class'>
            <CreateACLass />
          </Route>
          <Route exact path='/classes'>
            <Classes />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
