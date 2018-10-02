import React, { Component } from "react";
import Result from "./Result";

class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      total: 0
    };
  }

  inputChange(key, val) {
    this.setState({ [key]: val });
  }

  math = val => {
    if (val === "Add") {
      let newTotal = +this.state.num1 + +this.state.num2;
      this.setState({ total: newTotal });
    } else if (val === "Subtract") {
      let newTotal = +this.state.num1 - +this.state.num2;
      this.setState({ total: newTotal });
    } else if (val === "Multiply") {
      let newTotal = this.state.num1 * this.state.num2;
      this.setState({ total: newTotal });
    } else if (val === "Divide") {
      let newTotal = this.state.num1 / this.state.num2;
      this.setState({ total: newTotal });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <select onChange={e => this.math(e.target.value)}>
          <option value="Add">Add</option>
          <option value="Subtract">Subtract</option>
          <option value="Multiply">Multiply</option>
          <option value="Divide">Divide</option>
        </select>

        <div>
          <input
            type="number"
            placeholder="enter a number!"
            value={this.state.num1}
            onChange={e => this.inputChange("num1", e.target.value)}
          />

          <input
            type="number"
            placeholder="enter a number!"
            value={this.state.num2}
            onChange={e => this.inputChange("num2", e.target.value)}
          />
        </div>

        <Result total={this.state.total}>Equals:</Result>
      </div>
    );
  }
}

export default Dropdown;
