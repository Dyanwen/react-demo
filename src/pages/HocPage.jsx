import React, { Component } from "react";

const foo = (Comp) => (props) => {
  return (
    <div className="border">
      <span>这是标题头</span>
      <Comp {...props}></Comp>
    </div>
  );
};

function child(props) {
  return <div className="border">child-{props.name}</div>;
}
const Foo = foo(foo(child));

export class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>hocpage</h3>
        <Foo name="canshu" />
      </div>
    );
  }
}

export default HocPage;
