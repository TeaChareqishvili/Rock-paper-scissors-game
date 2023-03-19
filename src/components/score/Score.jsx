import React from "react";
import { ScoreBoard, ScoreTitle, ScoreWrapper } from "./scoreStyles";

function Score() {
  const ScoreValue = 12;
  return (
    <ScoreWrapper>
      <ScoreTitle>
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </ScoreTitle>
      <ScoreBoard>
        <p className="title">Score</p>
        <p className="value">{ScoreValue}</p>
      </ScoreBoard>
    </ScoreWrapper>
  );
}

export default Score;
