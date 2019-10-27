import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Jumbotron from "./components/Jumbrotron/Jumbotron"
import Footer from "./components/Footer/Footer";
class App extends React.Component {
  state =  {
    score: 0,
    topScore: 0,
    gameStarted: false,
    stillGuessing: false,
    guessedImages: []
  }

  handlePicClick = (event)=>{
    this.state.guessedImages.filter((image)=>{
      return image === event.target.alt
    })
    const tempGuessedArray = this.state.guessedImages;
    tempGuessedArray.push(event.target.alt)
    this.setState({
      guessedImages:tempGuessedArray
    },()=>{
      console.log(this.state)
    })

    
  };


  render() {
    return (
      <div>
        <Header state={this.state}/>
        <Jumbotron handlePicClick={this.handlePicClick}/>
        <Footer />
      </div>
    );
  }
}

export default App;
