import React, { Component } from "react";
import { ThemeContext } from "../Context";
import UserPage from "./UserPage";

export class HomePage extends Component {
  static contextType = ThemeContext;

  render() {
    return <UserPage />;
  }
}
// HomePage.contextType = ThemeContext;
export default HomePage;
