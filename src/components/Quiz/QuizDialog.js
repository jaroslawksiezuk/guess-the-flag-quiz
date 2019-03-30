import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

function QuizDialog(props) {
  return (
    <Dialog open={props.openDialog} aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title">Your score</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Congratulations to our quiz winners!
        </DialogContentText>
        <DialogContentText>
          <strong>Points</strong>: {props.points}/{props.limit}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleDialogClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default QuizDialog;
