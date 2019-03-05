import React, { Component } from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";


class App extends Component {
  
  render() {
    return (
      <div >
          <Navbar />
          <Header />
          <Body />      
          <Footer />
      </div>
    );
  }
}

export default App;
