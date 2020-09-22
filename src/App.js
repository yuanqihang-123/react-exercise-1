import React, { Component } from 'react';
import './App.scss';
import App_Header from './header/App_Header';
import App_Body from './body/App_Body';
import App_Nav from './nav/App_Nav';
class App extends Component {
  render() {
    return (
      <main className="app">
        <App_Header></App_Header>
        <App_Nav></App_Nav>
        <App_Body></App_Body>
      </main>
    );
  }
}

export default App;
