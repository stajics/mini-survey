import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Home from './screens/Home';
import CurrentJob from './screens/CurrentJob';
import JobOffer from './screens/JobOffer';
import Research from './screens/Research';
import Redirect from './screens/Redirect';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
        <AnimatedSwitch
          atEnter={{ offset: 500 }} 
          atLeave={{ offset: -100 }} 
          atActive={{ offset: 0 }} 
          mapStyles={styles => ({
            display: styles.offset < 0 ? 'none' : 'block',
            transform: `translateX(${styles.offset}%)`,
          })}
        >
          <Route path="/" exact component={Home} />
          <Route path="/current-job"  component={CurrentJob} />
          <Route path="/job-offer"  component={JobOffer} />
          <Route path="/research"  component={Research} />
          <Route path="/redirect"  component={Redirect} />
        </AnimatedSwitch>
        </Router>
      </div>
    );
  }
}

export default App;