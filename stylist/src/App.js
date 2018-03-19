import React, { Component } from 'react';
import './App.css';





class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src='Self.png' height='100px' alt="selfie"/>
          <h1 className="App-title">Lydia Macias</h1>
        </header>

        <h3 className="App-intro">pro hair & makeup artist-beauty consultant-trend setter</h3>

        <div className= "button1">
          <button type="button" class="btn btn-success">Gallery</button>
        </div>

        <div className= "button2">
          <button type="button" class="btn btn-success">Bio</button>
        </div>

        <div className= "button2">
          <button type="button" class="btn btn-success">Services</button>
        </div>

        <div className="pics">
          <img src='colors/lowlights.jpg' height='100px' alt='lowlights'/>
          <img src='colors/redandblue.jpg' height='100px' alt='redandblue'/>
        </div>
      </div>
    );
  }
}

export default App;
