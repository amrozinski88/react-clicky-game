import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Jumbotron from "./components/Jumbrotron/Jumbotron"
import Footer from "./components/Footer/Footer";
class App extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    gameStarted: false,
    stillGuessing: false,
    guessedImages: []
  }

  handlePicClick = (event) => {
    if (this.state.guessedImages.includes(event.target.alt)) {
      this.setState({
        score: 0,
        stillGuessing: false,
        guessedImages: []
      })
    } else {
      const tempGuessedArray = this.state.guessedImages;
      tempGuessedArray.push(event.target.alt)
      const newScore = this.state.score + 1;
      const topScore = newScore > this.state.topScore ? newScore : this.state.topScore;
      this.setState({
        score: newScore,
        topScore: topScore,
        guessedImages: tempGuessedArray,
        gameStarted: true,
        stillGuessing: true
      }, () => {
        console.log(this.state)
      })
    }



  };


  render() {
    return (
      <div>
        <Header state={this.state} />
        <Jumbotron handlePicClick={this.handlePicClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
