import { Component } from "react";
import Card from "../components/shared/Card";

class ClockClass extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      topic: "Class Component",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidUpdate(preProps, preState) {
    console.log("componentDidUpdate");
    if (preState.topic !== this.state.topic) {
      console.log("topic value changed");
    }
  }

  componentWillUnmount() {}

  //   handleClick() {
  //     this.setState({
  //       topic: "Class component has changed",
  //     });
  //   }
  render() {
    console.log("render");
    return (
      <Card>
        <h3>Hello Class Component</h3>
        <h3>Property: {this.props.name}</h3>
        <h3>It is {this.state.date.toLocaleTimeString()}</h3>
        <h3>{this.state.topic}</h3>
        <button
          onClick={() =>
            this.setState({
              topic: "Class component has changed",
            })
          }
        >
          Change
        </button>
      </Card>
    );
  }
}

export default ClockClass;
