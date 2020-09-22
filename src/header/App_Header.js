import React, { Component } from 'react';
import './App_Header.scss';
import avatar from '../assets/avatar.jpg';
class App_Header extends Component {
  render() {
    return (
      <header className="app_header">
        <div>
          <img className="app_img" src={avatar} alt="avatar" />
        </div>
        <div>
          <h2 className="app_hello">HELLO,</h2>
        </div>
        <div>
          <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
        </div>
        <hr />
      </header>
    );
  }
}

export default App_Header;
