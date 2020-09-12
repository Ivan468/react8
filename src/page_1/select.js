import React, { Component } from "react";
 
// import "./select.css";
import Select, { components } from "react-select";

const options = [
  { value: "England", label: "England", icon: "fork.svg" },
  { value: "Germany", label: "Germany", icon: "fork.svg" }
];

const { Option } = components;
const IconOption = props => (
  <Option {...props}>
    <img
      src={require('./' + props.data.icon)}
      style={{ width: 36 }}
      alt={props.data.label}
    />
     
  </Option>
);

class Selectapp extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Select
        defaultValue={options[0]}
        options={options}
        components={{ Option: IconOption }}
      />
    );
  }
}

export default Selectapp;