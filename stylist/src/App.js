import React, { Component } from 'react';
import './App.css';
import Gallery from './gallery.js';
import Bio from './bio_paragraphs.js';
import Services from './services.js';
import Scheduler from './scheduler.js';
import 'react-big-calendar/lib/css/react-big-calendar.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { tab: "Services" }
  }


  setTab(content_name) {
    this.setState(
      (prevState, props) => {
        return Object.assign(prevState, {tab: content_name})
      }
    )
  }

  render() {
    const tabComps = {Services: <Services/>, Gallery: <Gallery/>, Bio: <Bio/>, Scheduler: <Scheduler/>, }

    return (
      <div className="App">
        <header className="App-header" >

          <div className="lydia">
            <img className="selfie" src='Self.png'   height='175px' alt="selfie"/>
          </div>
          <h1 className="title">LOBeautyArt By: Lydia Macias</h1>

          <div className="facebook">
              <a target="_blank" href="https://www.facebook.com/LObeautyart/">
              <img src='images/facebook.png' margin='10px' height='40px'  alt="facebook"/>
              </a>
              <a target="_blank" href="https://www.instagram.com/liddymac/?hl=en">
              <img src='ig.png' height='40px' padding="15px" alt="instagram"/>
              </a>
          </div>


        </header>
        <h3 className="App-intro">pro hair & makeup artist-beauty consultant-trend setter</h3>
        <div className="tabs">
          <button type="button" className="button1" onClick={this.setTab.bind(this, "Services")}>Services / Prices</button>
          <button type="button" className="button1" onClick={this.setTab.bind(this, "Gallery")}>Gallery</button>
          <button type="button" className="button1" onClick={this.setTab.bind(this, "Scheduler")}>Scheduler</button>
            <button type="button" className="button1" onClick={this.setTab.bind(this, "Bio")}>Bio</button>
        </div>

        {tabComps[this.state.tab]}

      </div>
    );
  }
}

export default App;
