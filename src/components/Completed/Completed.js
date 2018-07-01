import React, { Component } from 'react';
import axios from 'axios';
import './Completed.css';
import { connect } from 'react-redux';

const mapReduxStateToProps = reduxState => ({
  reduxState
})

class Completed extends Component {
  render() {
    return (
      <div className="Completed">
        <p>Thank You for Your Feedback!</p>
        <a href='#/feeling'>Leave New Feedback</a>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Completed);
