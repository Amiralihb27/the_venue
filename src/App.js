import React from "react";
import './resources/styles.css';
import Header from "./components/header-footer/Header";
import Footer from "./components/header-footer/Footer";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlights from './components/highlights'
import Pricing from "./components/pricing";
import Location from "./components/location";
import { Element } from 'react-scroll';
const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Element name="featured">
        <Featured />
      </Element>


      <Element name="venuInfo">
        <VenueNfo />
      </Element>

      <Element name="highlights">
      <Highlights />
      </Element>

      <Element name="pricing">
      <Pricing />
      </Element>

      <Element name="location">
      <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
