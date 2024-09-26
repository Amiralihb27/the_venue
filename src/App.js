import React from "react";
import './resources/styles.css';
import Header from "./components/header-footer/Header";
import Footer from "./components/header-footer/Footer";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlights from './components/highlights'
import Pricing from "./components/pricing";
const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Featured />
      <VenueNfo />
      <Highlights />
      <Pricing />
      
      <div style={{backgroundColor:'red' , height:'800px'}}></div>
      <div style={{backgroundColor:'blue' , height:'800px'}}></div>
      <div style={{backgroundColor:'green' , height:'800px'}}></div>
      <div style={{backgroundColor:'gray' , height:'800px'}}></div>
      <Footer />
    </div>
  );
}

export default App;
