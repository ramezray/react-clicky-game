import React, { Component } from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";


class App extends Component {
  state ={
    score: 0,
    topScore: 0,
    highestScore:0,
    increamentScore : () => {
      this.setState({ score: this.state.score + 1 });
      this.setState({ topScore: this.state.topScore + 1 });
      this.setState({ highestScore: (this.state.highestScore < this.state.topScore ? this.state.highestScore +1 : this.state.highestScore)})
      // this.state.increaseScore();
      // if topScore is higher display topScore otherwise display hieghestScore *(this.props.topScore >= this.props.highestScore) ? this.props.topScore : this.props.highestScore
      // (this.state.highestScore >= this.state.topScore ? this.highestScore === this.state.topScore : this.state.highestScore)});
    },
    restScore: ()=>{
      this.setState({score : 0})},
  }
  render() {
    return (
      <div >
          <Navbar score = {this.state.score} topScore = {this.state.topScore} highestScore = {this.state.highestScore} />
          <Header />
          <Body   score = {this.state.score} increamentScore = {this.state.increamentScore} restScore = {this.state.restScore} />      
          <Footer />
      </div>
    );
  }
}

export default App;
