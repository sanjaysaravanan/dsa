import React, { Component } from "react";
class TestApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <button id="ClickMe" className="click-me">
          Click Me
        </button>
      </div>
    );
  }
}
export default TestApp;
