/* eslint-disable arrow-parens, object-curly-newline */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

// App component - represents the whole app
export default withStyles(styles)(
  class App extends Component {
    static propTypes = {
      classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    };

    state = {};

    render() {
      const { classes } = this.props;

      return (
        <Paper className={classes.root}>
          <Typography variant="h1" align="center" gutterBottom>
            Hello!
          </Typography>
        </Paper>
      );
    }
  },
);
