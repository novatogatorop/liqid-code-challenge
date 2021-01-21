import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="Pages">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
