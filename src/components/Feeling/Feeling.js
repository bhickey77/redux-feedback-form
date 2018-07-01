import React, { Component } from 'react';
import axios from 'axios';
import './Feeling.css';
import { connect } from 'react-redux';

const mapReduxStateToProps = ({reduxStore}) => ({
  reduxStore
})

class Feeling extends Component {
  constructor(props){
    super(props);
    this.state = {
      feeling: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const action = {type: 'ADD_FEELING', payload: parseInt(this.state.feeling, 10)};
    this.props.dispatch(action);
    window.location.href = '#/understanding';
  }

  handleChange = (event) => {
    this.setState({
      feeling: event.target.value
    })
  }
  
  render() {
    return (
      <div className="Feeling">
        <p>How are you feeling today?</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Next"/>
        </form>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Feeling);

