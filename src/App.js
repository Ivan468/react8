import React from 'react';
import './App.css';

import ReactDOM from "react-dom";


import Page_one from "./page_1/page_one.js";
import Page_three from "./page_3/page_three.js";


class App extends React.Component {
  render() {
    return (
      <>
          <Page_one/>
          <Page_three/>
      </>
    )
  }
}
export default App;
