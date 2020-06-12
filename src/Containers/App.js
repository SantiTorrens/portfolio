import React, { Component } from "react";

import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: false,
    };
  }
  clickHandler = () => {
    this.setState((prevState) => {
      return { color: !prevState.color };
    });
  };
  render() {
    const classes = ["App"];
    if (this.state.color) {
      classes.push("App-Black");
    }
    return (
      <div className={classes.join(" ")}>
        <div className="btn-container">
          <button
            type="button"
            className="color-btn"
            onClick={this.clickHandler}
          >
            Color Mode
          </button>
        </div>

        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
