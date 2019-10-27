import React from "react";
import "./AnswerDisplay.css";

class AnswerDisplay extends React.Component {
  render() {
    if (this.props.middleCard) {
      return !this.props.state.gameStarted ? (
        <h2>Click a picture to start</h2>
      ) : (
        <h2>
          {this.props.state.stillGuessing
            ? "Correct Click Again"
            : "Incorrect Start a new game by Clicking"}{" "}
        </h2>
      );
    }
    return <h2>Score: {this.props.state.score}|Top Score: {this.props.state.topScore}</h2>;
  }
}

export default AnswerDisplay;
