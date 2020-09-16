import React, { Component } from "react";
 
// import "./select.css";
 

const options = [
  { value: "England", label: "England", icon: "icon.svg" },
  { value: "Germany", label: "Germany", icon: "icon.svg" }
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

function Selectapp() {

    this.state = {
      name: "React"
    };
  


    return (
      <Select
        defaultValue={options[0]}
        options={options}
        components={{ Option: IconOption }}
      />
    );
  
}

export default Selectapp;