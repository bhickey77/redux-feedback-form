import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feeling from '../Feeling/Feeling'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <Route exact path='/feeling' component={Feeling} />
          {/* <Route exact path='/understanding' component={Understanding} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/comments' component={Comments} />
          <Route exact path='/completed' component={Completed} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
