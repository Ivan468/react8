import React, { Component } from "react";

import Header from "./header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Page_three extends Component {
  render() {
    return (
      <Router>
        <div className="page_three"></div>
      </Router>
    );
  }
}

export default Page_three;
