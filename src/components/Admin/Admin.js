import React, { Component } from 'react';
import axios from 'axios';
import './Admin.css';
import { connect } from 'react-redux';

const mapReduxStateToProps = ({reduxStore}) => ({
  reduxStore
})

class Admin extends Component {
  constructor(props){
    super(props);
    this.state = {
      feedbackList: []
    }
  }

  getFeedbackList = () => {
    axios.get('/admin', (req, res) => {
      
    })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const action = {type: 'ADD_Admin', payload: parseInt(this.state.Admin, 10)};
  //   this.props.dispatch(action);
  //   window.location.href = '#/understanding';
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     Admin: event.target.value
  //   })
  // }
  
  render() {
    return (
      <div className="Admin">
        <p>How are you Admin today?</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Next"/>
        </form>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Admin);

