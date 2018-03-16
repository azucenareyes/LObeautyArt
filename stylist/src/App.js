import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {showBio: false}
  }

  render() {
    // <button onclick={this.setState(
    //   (prevState, props) => {
    //     prevState.showBio = ! prevState.showBio
    //     return(prevState)
    //   }
    // )} />
    return (
      <div className="App">
        <header className="App-header">
          <img src='Self.png' height='100px'/>
          <h1 className="App-title">Lydia Macias</h1>
        </header>
        
        <h3 >pro hair & makeup artist-beauty consultant-trend setter</h3>

          <p>
            Born with a natural ability to create and make things beautiful.
            Lydia 1st generation /self made beauty artist, found her calling early
            in life being in charge of younger family members and helping them
            groom themselves. Doing hair styles and putting makeup on neighborhood
            girls and some boys,  while they performed little talent shows in
            her front yard. In high school she would do her friends hair and makeup
            for special occasions and photography.
          </p>
          <p>
            Born in Colorado working in the Longmont and Denver areas most of
            her 16 year career. Lydia has educated, mentored stylists and
            students,managed businesses, worked global and national runway shows
            and salon owned.
          </p>
          <p>
            Lydia’s education and background in the beauty industry upon her
            degree in Cosmetology in ‘03, is working with Tigi/Bedhead for 5 years
            as a international cosmetic artist and educator. Worked for Enjoy
            International for 2 years as a brand ambassador and colorist,Owned and
            operated Ella’s Hair Studio for 8years. She is experienced in hair care
            and cosmetic lines Schwarzopf, Tigi, Framesi, Joico, L’Oreal, Lorac,
            NYX and many others.
          </p>
          <p>
            Lydia's current freelance business is LObeautyArt..she's practicing
            her Master Stylist skills at On The Avenue Salon in longmont, CO.
            performing the latest trend in hair color and cutting, makeup
            artistry, Up-dos for special occasions., specializing in Vintage hair
            styles, waxing and hair extensions.
          </p>

          <img src='colors/lowlights.jpg' height='100px'/>
          <img src='colors/redandblue.jpg' height='100px'/>
      </div>
    );
  }
}

export default App;
