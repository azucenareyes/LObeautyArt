import React, { Component } from 'react';
import './App.css';
import Gallery from './gallery.js'
import Bio from './bio_paragraphs.js';
import Services from './services.js';
import Scheduler from './scheduler.js';




class App extends Component {

  constructor(props) {
    super(props)
    this.state = {showGallery: false, showBio: false, showServices: false, showScheduler: false}
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

  toggleScheduler(){
    this.setState(Object.assign(this.state, {showBioScheduler: ! this.state.showBioScheduler}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src='Self.png' height='100px' alt="selfie"/>
          <h1 className="App-title">Lydia Macias</h1>
        </header>

        <h3 className="App-intro">pro hair & makeup artist-beauty consultant-trend setter</h3>


        <button type="button" className="button1" onClick={this.toggleServices.bind(this)}>Services</button>
        {this.state.showServices ? <Services/> : ""}

        <button type="button" className="button1" onClick={this.toggleGallery.bind(this)}>Gallery</button>
        {this.state.showGallery ? <Gallery/> : ""}

        <button type="button" className="button1" onClick={this.toggleScheduler.bind(this)}>Scheduler</button>
        {this.state.showScheduler ? <Scheduler/> : ""}

        <button type="button" className="button1" onClick={this.toggleBio.bind(this)}>Bio</button>
        {this.state.showBio ? <Bio/> : ""}

      </div>
    );
  }
}

export default App;
