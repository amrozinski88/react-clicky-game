import React from "react";
import "./Header.css";
import AnswerDisplay from "../AnswerDisplay/AnswerDisplay";
const Header = ({state}) => {
  return (
    <div className="row sticky-top topHeader text-center">
      <div className="col-4 leftHeader d-flex justify-content-center align-items-center">
        <a id="reloadBtn" href="/"><h2>Clicky Game</h2></a>
      </div>
      <div className="col-4 middleHeader d-flex justify-content-center align-items-center">
        <AnswerDisplay middleCard={true} state={state}/>
      </div>
      <div className="col-4 rightHeader d-flex justify-content-center align-items-center">
        <AnswerDisplay state={state}/>
      </div>
    </div>
  );
};

export default Header;
