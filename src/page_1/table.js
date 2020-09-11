import React, { Component } from "react";
import "./table.css";
import { Icon, InlineIcon } from "@iconify/react";
import restaurantSharp from "@iconify/icons-ion/restaurant-sharp";
import shirtSharp from "@iconify/icons-ion/shirt-sharp";
import fastFoodSharp from "@iconify/icons-ion/fast-food-sharp";
import businessIcon from "@iconify/icons-ion/business";
import pawIcon from "@iconify/icons-ion/paw";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charges: [
        {
          category: <Icon icon={shirtSharp} style={{ fontSize: "35px" }} />,
          description: "Food",
          date: "11.06.2020",
          money: 55.68,
        },
        {
          category: <Icon icon={fastFoodSharp} style={{ fontSize: "35px" }} />,
          description: "Ali",
          date: "05.05.2029",
          money: 37,
        },
        {
          category: <Icon icon={businessIcon} style={{ fontSize: "35px" }} />,
          description: "Saad",
          date: "11.07.2019",
          money: 26,
        },
        {
          category: <Icon icon={pawIcon} style={{ fontSize: "35px" }} />,
          description: "Asad",
          date: "29.06.2019",
          money: 96,
        },
        {
          category: (
            <Icon icon={restaurantSharp} style={{ fontSize: "35px" }} />
          ),
          description: "Asad",
          date: "29.06.2019",
          money: 96,
        },
      ],
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.charges[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.charges.map((student, index) => {
      const { category, description, date, money } = student; //destructuring
      return (
        <tr key={category}>
          <td>{category}</td>
          <td>{description}</td>
          <td>{date}</td>
          <td>${money}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table id="charges-style">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
