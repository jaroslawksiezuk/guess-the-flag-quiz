import { Component } from "react";
import { navigate } from "@reach/router";
import _ from "lodash";
import FLAGS from "../../constants/flags";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.random = this.random.bind(this);
    this.answerTitle = this.answerTitle.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    this.isLastQuestion = this.isLastQuestion.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);

    this.state = {
      items: [],
      correct: "",
      openSnackbar: false,
      openDialog: false,
      points: 0,
      limit: 10,
      numbers: 0
    };
  }

  componentDidMount() {
    this.random();
  }

  random() {
    const items = _.sampleSize(Object.keys(FLAGS), 4);
    const correct = _.sample(items);
    this.setState({
      items,
      correct
    });
  }

  isLastQuestion() {
    const { numbers, limit } = this.state;
    if (numbers >= limit - 1) {
      this.setState({
        openDialog: true
      });
    } else {
      this.random();
    }
  }

  answerTitle(key) {
    return FLAGS[key] || "";
  }

  handleAnswer(key) {
    const { numbers } = this.state;
    this.setState({
      numbers: numbers + 1
    });

    if (key === this.state.correct) {
      const { points } = this.state;
      this.setState({
        points: points + 1
      });
    } else {
      this.setState({
        openSnackbar: true
      });
    }

    this.isLastQuestion();
  }

  handleSnackbarClose() {
    this.setState({
      openSnackbar: false
    });
  }

  handleDialogClose() {
    navigate("/");
  }

  handleBackButton() {
    navigate("/");
  }
}

export default Quiz;
