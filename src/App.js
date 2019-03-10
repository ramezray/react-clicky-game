import React, { Component } from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";


class App extends Component {
  state ={
    score: 0,
    topScore: 0,
    increamentScore : () => {
      this.setState({ score: this.state.score + 1 });
      this.setState({ topScore: this.state.topScore + 1 });
    },
    restScore: ()=>{
      this.setState({score : 0})},
      msg: [
        { gameStart: "Click an Image to Begin!" },
        { correctPick: "Correct Pick!" },
        { lostGame: "Sorry You Lost!" }
      ]
  }

  

  render() {
    return (
      <div >
          <Navbar score = {this.state.score} topScore = {this.state.topScore} />
          <Header />
          <Body   score = {this.state.score} increamentScore = {this.state.increamentScore} restScore = {this.state.restScore} />      
          <Footer />
      </div>
    );
  }
}

export default App;
