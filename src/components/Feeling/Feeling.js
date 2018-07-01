import React, { Component } from 'react';
import axios from 'axios';
import './Feeling.css';
import { component } from 'react-redux';

const mapReduxStateToProps = reduxState => ({
  reduxState
})

class Feeling extends Component {
  render() {
    return (
      <div className="Feeling">
        <p>How are you feeling today?</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Feeling);
