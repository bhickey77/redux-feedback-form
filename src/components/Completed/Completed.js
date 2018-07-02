import React, { Component } from 'react';
import './Completed.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from '../../inputStyles';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon/Icon'

const mapReduxStateToProps = reduxState => ({
  reduxState
})

class Completed extends Component {
  handleNewFeedback = () => {
    this.props.dispatch({type: 'NEW_FEEDBACK'})
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.cardCompleted}>
       <CardContent>
          <Typography className={classes.title} color="textPrimary">
          <Icon>done</Icon> Complete! Thank You for Your Feedback!
          </Typography>
       </CardContent>
       <CardActions >
        <Button onClick={this.handleNewFeedback} variant="contained" href="#/" className={classes.buttonNewFeedback}>
          Leave New Feedback 
        </Button>
       </CardActions>
     </Card>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(mapReduxStateToProps)
)(Completed);

