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
import Icon from '@material-ui/core/Icon/Icon'
import TextField from '@material-ui/core/TextField';

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: ''
    }
  }

  componentDidMount(){
    console.log(this.props.reduxStore.feedbackReducer.comments);
    this.setState({
      comments: this.props.reduxStore.feedbackReducer.comments
    })
  }

  handleBack = (event) => {
    const action = {type: 'ADD_COMMENTS', payload: this.state.comments};
    this.props.dispatch(action);
    window.location.href = '#/support';
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const action = {type: 'ADD_COMMENTS', payload: this.state.comments};
    await this.props.dispatch(action);
    let objectToSend = {
      feeling: this.props.reduxStore.feedbackReducer.feeling,
      understanding: this.props.reduxStore.feedbackReducer.understanding,
      support: this.props.reduxStore.feedbackReducer.support,
      comments: this.props.reduxStore.feedbackReducer.comments,
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
          <CardActions className={classes.buttonContainer}>
            <Button onClick={this.handleBack} size="small"><Icon>arrow_back</Icon>  Previous Item</Button>
            <Button onClick={this.handleSubmit} size="small">Finish Feedback   <Icon>check_circle</Icon></Button>
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

