import React, { Component } from "react";
import { Router } from "@reach/router";

import MainMenu from "./components/MainMenu";
import FlagToCountry from "./components/FlagToCountry";
import CountryToFlag from "./components/CountryToFlag";

class App extends Component {
  render() {
    return (
      <Router>
        <MainMenu path="/" />
        <FlagToCountry path="/FlagToCountry" />
        <CountryToFlag path="/CountryToFlag" />
      </Router>
    );
  }
}

export default App;
