import React, { Component } from 'react';
import './App.css';
import './components/component.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Feed from "./components/Feed";
import MyFeedForm from "./components/MyFeedForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Feed} exact />
          <Route path="/form" component={MyFeedForm} exact />
        </div>
      </Router>
    );
  }
}

export default App;
