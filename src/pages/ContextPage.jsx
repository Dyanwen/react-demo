import React, { Component } from "react";
import { ThemeProvider, UserProvider } from "../Context";
import ConsumerPage from "./ConsumerPage";
import UseContextPage from "./UseContextPage";
export class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red",
      },
      user: { name: "xiaoming" },
    };
  }
  render() {
    const { theme, user } = this.state;
    return (
      <ThemeProvider value={theme}>
        <UserProvider value={user}>
          <ConsumerPage />
          <UseContextPage />
        </UserProvider>
      </ThemeProvider>
    );
  }
}

export default ContextPage;
