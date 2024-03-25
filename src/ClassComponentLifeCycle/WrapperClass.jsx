import React, { Component } from "react";
import ClockClass from "./ClockClass";
import ClockFunction from "./ClockFunction";

export default class WrapperClass extends Component {
  constructor() {
    super();
    this.state = {
      ClockFlag: false,
    };
    this.name = "Class Property";
  }
  render() {
    return (
      <div>
        <h2>Life cycle methods</h2>
        {/* {this.state.ClockFlag && <ClockClass name={this.name} />} */}
        {this.state.ClockFlag && <ClockFunction name="Function Props" />}
        <button onClick={() => this.setState({ ClockFlag: true })}>
          Add clock
        </button>
        <button onClick={() => this.setState({ ClockFlag: false })}>
          Remove clock
        </button>
      </div>
    );
  }
}
