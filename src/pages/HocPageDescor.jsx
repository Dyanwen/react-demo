import React, { Component } from "react";

const foo = (Comp) => (props) => {
  console.log("foo");
  return (
    <div className="border">
      <span>这是标题头</span>
      <Comp {...props}></Comp>
    </div>
  );
};
const foo1 = (Comp) => (props) => {
  console.log("foo1");
  return (
    <div className="border">
      <span>fasdfasdf</span>
      <Comp {...props}></Comp>
    </div>
  );
};

@foo
@foo1
class HocPageDescor extends Component {
  render() {
    return <div>name</div>;
  }
}

export default HocPageDescor;
