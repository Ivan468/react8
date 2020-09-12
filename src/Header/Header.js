import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
            <h3>MoneyTracker</h3>
        </div>





        <div className="menu">
            <a href="#"> Home</a>
            <a href="#"> Charts</a>
            <a href="#"> Categories</a>
        </div>
      </div>
    );
  }
}

export default Header;