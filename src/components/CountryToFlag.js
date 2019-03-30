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
    height: "80px",
    width: "150px",
    margin: "5px auto"
  },
  card: {
    margin: "10px 10px"
  },
  button: {
    margin: "10px 0"
  }
});

class CountryToFlag extends Quiz {
  render() {
    const { classes } = this.props;
    const {
      limit,
      openSnackbar,
      openDialog,
      points,
      items,
      correct
    } = this.state;

    const answers = items.map(key => (
      <Button
        key={key}
        onClick={() => this.handleAnswer(key)}
        className={classes.button}
        fullWidth={true}
        variant="outlined"
      >
        <CardMedia
          className={classes.media}
          image={require(`../static/flags/${key.toLowerCase()}.png`)}
        />
      </Button>
    ));

    return (
      <div>
        <QuizBar
          title={"Match the country"}
          points={points}
          limit={limit}
          handleBackButton={this.handleBackButton}
        />

        <Card className={classes.card}>
          <CardContent>
            <Button
              variant="outlined"
              className={classes.button}
              fullWidth={true}
            >
              {this.answerTitle(correct)}
            </Button>
            <Typography align="center" component="p">
              Which flag belong to this country?
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

export default withStyles(styles)(CountryToFlag);
