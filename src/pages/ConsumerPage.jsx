import React, { Component } from "react";
import { ThemeConsumer, UserConsumer } from "../Context";

export class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <h3>consumerPage</h3>
        <ThemeConsumer>
          {(themeContext) => (
            <div className={themeContext.themeColor}>
              fasdfa
              <UserConsumer>
                {(userContext) => <Child {...userContext} />}
              </UserConsumer>
            </div>
          )}
        </ThemeConsumer>
      </div>
    );
  }
}
function Child(props) {
  return <div>{props.name}</div>;
}
export default ConsumerPage;
