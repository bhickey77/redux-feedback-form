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

  componentDidMount() {
    this.getFeedbackList();
  }

  getFeedbackList = () => {
    axios.get('/admin')
      .then(response => {
        console.log(`back from the server with: `, response);
        this.setState({
          feedbackList: response.data.reverse()
        });
      })
      .catch(error => {
        console.log(`back from the server with: `, error);
      })
  }

  handleDelete = (id) => {
    axios.delete(`/${id}`)
      .then(response => {
        console.log(`back from the server with: `, response);
        this.getFeedbackList();
      })
      .catch(error => {
        console.log(`error with the server: `, error);
      })
  }
  
  render() {
    return (
      <div className="Admin">
        <p>Admin</p>
        <table>
          <thead>
            <tr>
              <td>Feeling</td>
              <td>Comprehension</td>
              <td>Support</td>
              <td>Comments</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {this.state.feedbackList.map(item => {
              return (
                <tr>
                  <td>{item.feeling}</td>
                  <td>{item.understanding}</td>
                  <td>{item.support}</td>
                  <td>{item.comments}</td>
                  <td onClick={() => {this.handleDelete(item.id)}} >Delete</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(Admin);

