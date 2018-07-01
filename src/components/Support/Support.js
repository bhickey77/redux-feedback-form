import React, { Component } from 'react';
import axios from 'axios';
import './Support.css';
import { connect } from 'react-redux';

const mapReduxStateToProps = ({reduxStore}) => ({
  reduxStore
})

class Support extends Component {
  constructor(props){
    super(props);
    this.state = {
      support: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const action = {type: 'ADD_SUPPORT', payload: parseInt(this.state.support, 10)};
    this.props.dispatch(action);
    window.location.href = '#/comments';
  }

  handleChange = (event) => {
    this.setState({
      support: event.target.value
    })
  }
  
  render() {
    return (
      <div className="support">
        <p>How well are you being supported?</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Next"/>
        </form>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Support);

