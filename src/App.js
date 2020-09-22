import React from 'react';
import Home from "./pages/Home";
import logo from './logo.svg';
import './App.css';

import ReactGA from 'react-ga';

const trackingId = "UA-176116817-2"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
