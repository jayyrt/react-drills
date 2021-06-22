import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      filterString: "",
      favoriteFoods: ['Pizza', 'Pasta', 'Enchiladas', 'Tacos', ]
    };
  }

  handleChange(filter){
    this.setFilter({ filterString: filter });
  }

  render(){
    let foodToDisplay = this.state.favoriteFoods.filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {foodToDisplay}
      </div>
    );
  }
}
// function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
// );
//}
