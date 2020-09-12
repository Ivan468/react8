import React from "react";
import "./App.css";

import ReactDOM from "react-dom";

import Page_one from "./page_1/page_one.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Page_one />
      </div>
    );
  }
}
export default App;
