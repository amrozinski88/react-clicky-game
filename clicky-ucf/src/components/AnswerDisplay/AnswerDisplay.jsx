import React from "react";
import "./AnswerDisplay.css";

class AnswerDisplay extends React.Component {
    state = {
    score: 0,
    topScore: 0,
    gameStarted: false,
    stillGuessing: false
    }
    render (){
        if(this.props.gameInfo=== "stillPlaying"){
            return !this.state.gameStarted ? <h2>Click a picture to start</h2> : <h2>{this.state.stillGuessing? "Correct Click Again":"Incorrect Start a new game by Clicking"} </h2>

        }
        return <h2>Score: {this.state.score}</h2>
    }
}


export default AnswerDisplay


