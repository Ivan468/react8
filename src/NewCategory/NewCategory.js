import React from 'react';
import './NewCategory.css';
import './NewCategory.scss';



const NewCategory = () => {
  return (
    <div className="new-category__block">
    <h3 className="category-header__name">New category</h3>
    <div className="category-main__block">
    <span className="category-main__name">Name</span>
    <div className="category-main__input">
    <input type="text"></input>
    </div>

    <span className="category-main__name">Descripson</span>
    <div className="category-main__input">
    <input type="text"></input>

    </div>
    <div className="category-main__icon"></div>
    <span className="category-main__name">Select icon</span>
    <div className="category-main__input">
    <input type="text"></input>    
    </div>

    <button className="category-main__addButton">Add new category</button>
    </div>
    </div>

    

  
  )
}

export default NewCategory;
