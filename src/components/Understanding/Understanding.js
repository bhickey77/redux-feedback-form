import React, { Component } from 'react';
import axios from 'axios';
import './Understanding.css';
import { connect } from 'react-redux';

const mapReduxStateToProps = ({reduxStore}) => ({
  reduxStore
})

class Understanding extends Component {
  constructor(props){
    super(props);
    this.state = {
      understanding: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const action = {type: 'ADD_UNDERSTANDING', payload: parseInt(this.state.understanding, 10)};
    this.props.dispatch(action);
    window.location.href = '#/support';
  }

  handleChange = (event) => {
    this.setState({
      understanding: event.target.value
    })
  }
  
  render() {
    return (
      <div className="understanding">
        <p>How well are you understanding the content?</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Next"/>
        </form>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Understanding);

