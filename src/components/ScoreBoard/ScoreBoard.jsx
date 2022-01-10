import React from "react";
import styled from "styled-components";

import Button from "../Button/Button";

const ScoreBoardStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  position: fixed;
  background: #1e230f;
  width: 40%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  height: auto;
  top: 50%;
  left: 50%;
  padding: 3rem;
  color: #9b9d95;
  transform: translate(-50%, -50%);
`;

function ScoreBoard({ turnsCount, score, highScore, changeLevel, resetGame }) {
  return (
    <ScoreBoardStyled>
      <ModalStyled>
        <h1>Congratulations!</h1>
        <p>
          You completed the game in {turnsCount} turns and got {score} points!
        </p>
        <p>Your high score is {highScore}</p>
        <Button handleClick={resetGame}>Beat your high score</Button>
        <Button handleClick={changeLevel}>New Game</Button>
      </ModalStyled>
    </ScoreBoardStyled>
  );
}

export default ScoreBoard;
