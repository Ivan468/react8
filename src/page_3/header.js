import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Table from "./table";
// hello
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
        <Link to="/dashboard">Dashboard</Link>
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
            <Dashboard />
          </Route>
        </Switch>
       

      </Router>
    );
  }
}

function Home() {
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
                {/* <div className="Charges"> */}
                  {/* <Link to="/header"> Charges</Link> */}
                {/* </div> */}
                <div className="Incomes">
                  {/* <Link to="/"> Incomes</Link> */}
                </div>
              </div>
              <div className="charges">
                <div>
                  {/* <span className="my-charges">My Charges</span> */}
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

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

// export default Header;