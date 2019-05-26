import React, { Component } from 'react';
import MyHeader from './components/MyHeader';
import './App.css';
import './components/component.css';
import MyMain from "./components/MyMain";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHeader />
        <MyMain />
      </div>
    );
  }
}

export default App;
