import React, { Component } from 'react';
import axios from 'axios';
import './Feeling.css';
import { connect } from 'react-redux';

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
          <input type="submit" value="Next"/>
        </form>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Feeling);
