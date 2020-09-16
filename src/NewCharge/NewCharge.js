import React from 'react';
import './NewCharge.css';
import './NewCharge.scss';




function Charts() {
  return (
    <div className="charts">
     <h3>Надпис</h3>
    <input/>
    <h3>Надпис</h3>
    <input/>
    <h3>Надпис</h3>

       <button>Knopka</button>
    </div>
  );
}

const NewCharge = (props) => {
  return (
    <div className="new-category__block">
    <h3 className="category-header__name">New category</h3>
    <div className="category-main__block">
    <span className="category-main__name">Name</span>
    <div className="category-main__input">

    </div>

    <span className="category-main__name">Descripson</span>
    <div className="category-main__input">


    </div>
    <div className="category-main__icon"></div>
    <span className="category-main__name">Select icon</span>
    <div className="category-main__input">

    </div>

    <button className="category-main__addButton">Add new category</button>
    </div>
    </div>

    

  
  )
}

export default NewCharge;
