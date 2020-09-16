import React from 'react';
import Header from './'
import NewCategory from './src/Componets/NewCategory/NewCategory.js'
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
