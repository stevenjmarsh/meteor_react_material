import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    display: "flex",
  },
  content: {
    border: "2px solid green",
  },
};

const Content = props => {
  const {
    classes: { container, content },
  } = props;

  return (
    <div className={container}>
      <p className={content}>This is your content.</p>
    </div>
  );
};

Content.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Content);
