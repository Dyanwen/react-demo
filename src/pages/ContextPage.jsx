import React, { Component } from "react";
import HomePage from "./HomePage";
import { ThemeContext } from "../Context";

export class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        ThemeColor: "red",
      },
    };
  }
  render() {
    const { theme } = this.state;
    return (
      <>
        <ThemeContext.Provider value={theme}>
          <HomePage />
        </ThemeContext.Provider>
      </>
    );
  }
}

export default ContextPage;
