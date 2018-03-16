import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAcGr-81rFDvwSBZeJpkzIWIcAnDFw0yCQ",
  authDomain: "stylist-16cea.firebaseapp.com",
  databaseURL: "https://stylist-16cea.firebaseio.com",
  projectId: "stylist-16cea",
  storageBucket: "stylist-16cea.appspot.com",
  messagingSenderId: "1043086736023"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
