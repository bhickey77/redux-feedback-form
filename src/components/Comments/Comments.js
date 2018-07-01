import React, { Component } from 'react';
import axios from 'axios';
import './Comments.css';
import { connect } from 'react-redux';

const mapReduxStateToProps = ({feedbackReducer}) => ({
  feedbackReducer
})

class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const action = {type: 'ADD_COMMENTS', payload: this.state.comments};
    await this.props.dispatch(action);
    let objectToSend = {
      feeling: this.props.feedbackReducer.feeling,
      understanding: this.props.feedbackReducer.understanding,
      support: this.props.feedbackReducer.support,
      comments: this.props.feedbackReducer.comments,
    }
    console.log(objectToSend);
    axios.post('/', objectToSend)
      .then(response => {
        console.log(response);
        window.location.href = '#/completed'
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }
  
  render() {
    return (
      <div className="comments">
        <p>Any comments you want to leave?</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Next"/>
        </form>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Comments);

