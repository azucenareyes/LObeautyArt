import React, { Component } from 'react';
import './App.css';
import Gallery from './gallery.js'
import Bio from './bio_paragraphs.js';
import Services from './services.js';
import Calendar from './calendar.js';




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {showGallery: false, showBio: false, showServices: false, showCalendar: false}
  }

  toggleGallery(){
    this.setState(Object.assign(this.state, {showGallery: ! this.state.showGallery}))
  }

  toggleBio(){
    this.setState(Object.assign(this.state, {showBio: ! this.state.showBio}))
  }

  toggleServices(){
    this.setState(Object.assign(this.state, {showServices: ! this.state.showServices}))
  }

  toggleCalendar(){
    this.setState(Object.assign(this.state, {showBioCalendar: ! this.state.showCalendar}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src='Self.png' height='100px' alt="selfie"/>
          <h1 className="App-title">Lydia Macias</h1>
        </header>

        <h3 className="App-intro">pro hair & makeup artist-beauty consultant-trend setter</h3>


        <button type="button" className="button1" onClick={this.toggleGallery.bind(this)}>Gallery</button>
        {this.state.showGallery ? <Gallery/> : ""}

        <button type="button" className="button1" onClick={this.toggleBio.bind(this)}>Bio</button>
        {this.state.showBio ? <Bio/> : ""}

        <button type="button" className="button1" onClick={this.toggleServices.bind(this)}>Services</button>
        {this.state.showBio ? <Services/> : ""}

        <button type="button" className="button1" onClick={this.toggleCalendar.bind(this)}>Calendar</button>
        {this.state.showBio ? <Calendar/> : ""}

        <div className="pics">
          <img src='colors/lowlights.jpg' height='100px' alt='lowlights'/>
          <img src='colors/redandblue.jpg' height='100px' alt='redandblue'/>
        </div>
      </div>
    );
  }
}

export default App;
