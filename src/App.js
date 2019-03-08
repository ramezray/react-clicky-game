import React, { Component } from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";


class App extends Component {
  state ={
    score: 0,
    topScore: 0,
    handleClick : () => {
      this.setState({ score: this.state.score + 1 });
      this.setState({ topScore: this.state.topScore + 1 });
    }
  }

  

  render() {
    return (
      <div >
          <Navbar score = {this.state.score} topScore = {this.state.topScore}/>
          <Header />
          <Body   score = {this.state.score} handleClick = {this.state.handleClick} />      
          <Footer />
      </div>
    );
  }
}

export default App;
