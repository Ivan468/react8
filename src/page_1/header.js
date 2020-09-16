import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from "./table";
// import Dashboard from "./page_3/header.js"

class Header extends Component {
  render() {
    return (
      <Router>
        <div className="header">
          <div className="logo">
            <h3>MoneyTracker</h3>
          </div>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Categories</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Incomes />
          </Route>
        </Switch>
      </Router>
    );
  }
}

function Home() {
  return (
    <Router>
      <div className="right-block">
        <div>
          <div className="balanse">
            <h4>balanse</h4>
            <h5>$2,651.07</h5>
          </div>
          <div>
            <div className="href-right-block">
              <div className="Charges">
                <Link to="/charges"> Charges</Link>
              </div>
              <div className="Incomes">
                <Link to="/incomes"> Incomes</Link>
              </div>
            </div>
            <div className="charges">
              <div>
                <span className="my-charges">My Charges</span>
                <select className="select-p-1">
                  <option>this week</option>
                  <option>this month</option>
                </select>
              </div>
              <button>Add more</button>
            </div>
            <Switch>
              <Route path="/charges">
                <Table />
              </Route>
              {/* <Route path="/incomes">
                <Incomes />
              </Route> */}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h1> about</h1>
    </div>
  );
}

function Incomes() {
  return (
    <div className="right-block">
    <div >
           <div className="balanse">
             <h4>balanse</h4>
             <h5>$2,651.07</h5>
           </div>
           <div>
             <div className="href-right-block">
               <div className="charges">
                 <span className="my-charges">Categories</span>
               </div>
               <div className="Charges">
                 <Link to="/header"> Charges</Link>
               </div>
               {/* <div className="Incomes">
                 <Link to="/"> Incomes</Link>
               </div> */}
             </div>
             <div className="charges">
               <div>
                 <span className="my-charges">My Charges</span>
                 {/* <select className="select-p-1">
                   <option>this week</option>
                   <option>this month</option>
                 </select> */}
               </div>
               <button>Add more</button>
             </div>
             <Table />
           </div>
         </div>
   </div>
  );
}



export default Header;
