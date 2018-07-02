import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Completed from '../Completed/Completed';
import Admin from '../Admin/Admin';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Feeling} />
          <Route exact path='/understanding' component={Understanding} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/comments' component={Comments} />
          <Route exact path='/completed' component={Completed} />
          <Route exact path='/admin' component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
