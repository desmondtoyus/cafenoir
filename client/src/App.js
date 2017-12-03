import React, { Component } from 'react';

import './App.css';

import {
  Router,
  // Link,
  Route,
  Redirect
  // NotFoundRoute
} from 'react-router-dom';
import history from './history';


import Home from './pages/Home';
import Navbar from './components/Navbar';
import Watermark from './components/Watermark';
import Callback from './pages/Callback';
import {isLoggedIn } from './utils/AuthService';
import Subscribe from './components/Subscribe';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
import About from './pages/About';
import Contact from './pages/Contact';
{/* <Route exact path="/home" render={() => ( */ }
//   isLoggedIn() ? (
//     <Redirect to="/front" />
//   ) : (
//       <Home />
//     )
// )} />

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
        <body background="img/lines.svg" style={{zIndex: '-1'}}>
          <Navbar />
          <Watermark />
          <Route exact path="/" component={Home} />
          <Route exact path="/Resources" component={Resources} />
          <Route exact path="/Report" component={Report} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Profile" render={() => (
            (isLoggedIn()) ? (
              <Dashboard/>
            ) : (
                <Redirect to="/" />

              
              )
          )} />
          <Route path="/callback" component={Callback} />
          <Subscribe />
          </body>
        </div>
      </Router>
    );
  }
}




export default App;
