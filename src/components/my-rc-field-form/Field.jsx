import React, { Component } from "react";
import FieldContext from "./FieldContext";

export default class Field extends Component {
  static contextType = FieldContext;

  getControlled = () => {
    const { name } = this.props;
    const { setFieldsValue, getFieldValue } = this.context;
    return {
      value: getFieldValue(name),
      onChange: (event) => {
        const newValue = event.target.value;
        setFieldsValue({
          [name]: newValue,
        });
      },
    };
  };

  render() {
    const { children, name } = this.props;
    const returnChildNode = React.cloneElement(children, this.getControlled());
    return (
      <div>
        <label>{name}</label>
        {returnChildNode}
      </div>
    );
  }
}
