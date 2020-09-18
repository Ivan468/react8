import React from 'react';
import Header from './Componets/Header/Header'

import NewCategory from './Componets/NewCategory/NewCategory'
import './App.css';



const App = () => {
  return (
    <div className="header-category">
    <Header/>
    <NewCategory/>
    </div>
  )
}

export default App;
