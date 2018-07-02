import React, { Component } from 'react';
import axios from 'axios';
import './Comments.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from '../../inputStyles';

//======== Material UI ==========
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon/Icon'
import TextField from '@material-ui/core/TextField';

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
    const { classes } = this.props;

    return (
      <div>
      <div>
        <Card className={classes.card}>
          <CardContent>
            <TextField
              id="textarea"
              label="Any comments you want to leave?"
              placeholder="Write comments here"
              multiline
              value={this.state.comments}
              onChange={this.handleChange}
              className={classes.textField}
              margin="normal"
            />
          </CardContent>
          <CardActions onClick={this.handleSubmit} className={classes.buttonContainer}>
            <Button size="small">Finish Feedback   <Icon>check_circle</Icon></Button>
          </CardActions>
        </Card>
      </div>
    </div>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(mapReduxStateToProps)
)(Comments);

