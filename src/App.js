import React from "react";
import './resources/styles.css';
import Header from "./components/header-footer/Header";
import Footer from "./components/header-footer/Footer";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlights from './components/highlights'
import Pricing from "./components/pricing";
import Location from "./components/location";
const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Featured />
      <VenueNfo />
      <Highlights />
      <Pricing />
      <Location />
    
      <Footer />
    </div>
  );
}

export default App;
