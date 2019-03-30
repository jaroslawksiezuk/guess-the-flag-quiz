import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

import Quiz from "./Quiz/Quiz";
import QuizSnackbar from "./Quiz/QuizSnackbar";
import QuizDialog from "./Quiz/QuizDialog";
import QuizBar from "./Quiz/QuizBar";

const styles = () => ({
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  card: {
    margin: "20px 10px"
  },
  button: {
    marginTop: "10px"
  }
});

class FlagToCountry extends Quiz {
  render() {
    const { classes } = this.props;
    const {
      limit,
      correct,
      openSnackbar,
      openDialog,
      points,
      items
    } = this.state;

    const answers = items.map(key => (
      <Button
        key={key}
        onClick={() => this.handleAnswer(key)}
        className={classes.button}
        fullWidth={true}
        variant="outlined"
      >
        {this.answerTitle(key)}
      </Button>
    ));

    return (
      <div>
        <QuizBar
          title={"Match the flag"}
          points={points}
          limit={limit}
          handleBackButton={this.handleBackButton}
        />

        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={
              correct
                ? require(`../static/flags/${correct.toLowerCase()}.png`)
                : "noImage"
            }
          />
          <CardContent>
            <Typography align="center" component="p">
              To which county does this flag belong?
            </Typography>
            {answers}
          </CardContent>
        </Card>

        <QuizSnackbar
          openSnackbar={openSnackbar}
          handleSnackbarClose={this.handleSnackbarClose}
        />

        <QuizDialog
          openDialog={openDialog}
          handleDialogClose={this.handleDialogClose}
          limit={limit}
          points={points}
        />
      </div>
    );
  }
}

export default withStyles(styles)(FlagToCountry);
