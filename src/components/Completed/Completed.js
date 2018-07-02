import React, { Component } from 'react';
import axios from 'axios';
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
import TextField from '@material-ui/core/TextField';

const mapReduxStateToProps = reduxState => ({
  reduxState
})

class Completed extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.cardCompleted}>
       <CardContent>
          <Typography className={classes.title} color="textPrimary">
            Thank You for Your Feedback!
          </Typography>
       </CardContent>
       <CardActions >
        <Button variant="contained" href="#/" className={classes.buttonNewFeedback}>
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

