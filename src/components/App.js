import React, { Component } from 'react';
import './App.css';
import Items from '../containers/Items'
import ShoppingCart from '../containers/ShoppingCart';

class App extends Component {
  render(){
    return (
      <div className={"App-mainBody"}>
        <Items />
        <ShoppingCart />
      </div>
    )
  }
}

export default App;
