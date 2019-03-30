import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";

import CountryToFlagCover from "../static/CountryToFlag.jpg";
import FlagToCountryCover from "../static/FlagToCountry.jpg";

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

class MainMenu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Guess the Flag
            </Typography>
          </Toolbar>
        </AppBar>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={FlagToCountryCover} />
          <CardContent>
            <Typography align="center" component="p">
              Match the flag to the country
            </Typography>
            <Link to="/FlagToCountry">
              <Button
                variant="outlined"
                className={classes.button}
                fullWidth={true}
              >
                Play
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={CountryToFlagCover} />
          <CardContent>
            <Typography align="center" component="p">
              Match the country to the flag
            </Typography>
            <Link to="/CountryToFlag">
              <Button
                variant="outlined"
                className={classes.button}
                fullWidth={true}
              >
                Play
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(MainMenu);
