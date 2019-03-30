import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  margin: {
    marginRight: "15px"
  }
});

function QuizBar(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button onClick={props.handleBackButton} className={props.classes.margin} variant="contained" color="primary">
          BACK
        </Button>
        <Typography className={props.classes.margin} color="inherit">{props.title}</Typography>
        <Typography color="inherit">
          <strong>Points:</strong> {props.points}/{props.limit}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(QuizBar);
