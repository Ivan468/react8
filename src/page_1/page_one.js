import React, { Component } from "react";

import Header from "./header";
import Table from "./table";

class Page_one extends Component {
  render() {
    return (
      <div className="page_one">
        <Header />
        <div className="right-block">
          <div className="balanse">
            <h4>balanse</h4>
            <h5>$2,651.07</h5>
          </div>
          <div>
            <div className="href-right-block">
              <div className="Charges">
                <a href="#"> Charges</a>
              </div>
              <div className="Incomes">
                <a href="#"> Incomes</a>
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
            <Table/>


            {/* <div className="table-header">
              <h6>Category</h6>
              <h6>Descryption</h6>
              <h6>Date</h6>
              <h6>Money</h6>
              <h6>Action</h6>
            </div>
            <div className="table-line">
              <div>
                <Icon icon={restaurantSharp} style={{ fontSize: "35px" }} />{" "}
                <span>food</span>
              </div>
            </div> */}

          
          </div>
        </div>
      </div>
    );
  }
}

export default Page_one;
