import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  NotFoundRoute
} from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
// import PageNotFound from './pages/PageNotFound';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
       <Navbar/>
       <Route exact path ="/" component={Home}/>
       <Route exact path="/Resources" component={Resources} />
       {/* < Route exact path="*" component={PageNotFound} /> */}
      </div>
      </Router>
    );
  }
}

export default App;
