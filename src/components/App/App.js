import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter } from 'react-router-dom';
import Feeling from '../Feeling/Feeling'
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <HashRoute exact path='/feeling' component={Feeling} />
          <HashRoute exact path='/understanding' component={Understanding} />
          <HashRoute exact path='/support' component={Support} />
          <HashRoute exact path='/comments' component={Comments} />
          <HashRoute exact path='/completed' component={Completed} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
