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
          <Navbar />
          <Watermark />
          <Route exact path="/" component={Home} />
          <Route exact path="/Resources" component={Resources} />
          <Route exact path="/Profile" render={() => (
            (isLoggedIn()) ? (
              <Dashboard/>
            ) : (
                <Redirect to="/" />

              
              )
          )} />
          <Route path="/callback" component={Callback} />
          <Subscribe />
        </div>
      </Router>
    );
  }
}




export default App;
