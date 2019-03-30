import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

function QuizSnackbar(props) {
  return (
    <Snackbar
      open={props.openSnackbar}
      onClose={props.handleSnackbarClose}
      autoHideDuration={800}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message={<span id="message-id">Wrong!</span>}
    />
  );
}

export default QuizSnackbar;
