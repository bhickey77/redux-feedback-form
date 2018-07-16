import React, { Component } from 'react';
import axios from 'axios';
import './Admin.css';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const mapReduxStateToProps = ({reduxStore}) => ({
  reduxStore
})

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

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
    const { classes } = this.props;

    return (
      <div className="Admin">
        <h1>Check out the feedback you have received</h1>
         <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell numeric>Feeling</CustomTableCell>
                <CustomTableCell numeric>Comprehension</CustomTableCell>
                <CustomTableCell numeric>Support</CustomTableCell>
                <CustomTableCell numeric>Comments</CustomTableCell>
                <CustomTableCell numeric>Delete</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.feedbackList.map(item => {
                return (
                  <TableRow className={classes.row} key={item.id}>
                    <CustomTableCell numeric>{item.feeling}</CustomTableCell>
                    <CustomTableCell numeric>{item.understanding}</CustomTableCell>
                    <CustomTableCell numeric>{item.support}</CustomTableCell>
                    <CustomTableCell numeric>{item.comments}</CustomTableCell>
                    <CustomTableCell onClick={() => {this.handleDelete(item.id)}} numeric>DELETE</CustomTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default compose(
  withStyles(styles),
  connect(mapReduxStateToProps),
)(Admin);

