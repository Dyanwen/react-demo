import React, { Component } from "react";

export default class Field extends Component {
  render() {
    const { children, name } = this.props;
    return (
      <div>
        <label>{name}</label>
        {children}
      </div>
    );
  }
}
