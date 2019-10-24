import React from "react";
import "./Header.css";
import AnswerDisplay from "../AnswerDisplay/AnswerDisplay";
const Header = () => {
  return (
    <div className="row topHeader text-center">
      <div className="col-4 leftHeader d-flex justify-content-center align-items-center">
        <a id="reloadBtn" href="/"><h2>Clicky Game</h2></a>
      </div>
      <div className="col-4 middleHeader d-flex justify-content-center align-items-center">
        <AnswerDisplay gameInfo="stillPlaying" />
      </div>
      <div className="col-4 rightHeader d-flex justify-content-center align-items-center">
        <AnswerDisplay />
      </div>
    </div>
  );
};

export default Header;
