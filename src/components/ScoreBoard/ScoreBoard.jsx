import React from "react";
import styled from "styled-components";

import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const ScoreBoardHeader = styled.h1`
  text-align: center;
`;

const ScoreBoardMain = styled.p`
  color: #eee;
  font-size: 24px;
`;

const SpanStyled = styled.span`
  font-size: 28px;
`;

const ScoreBoardBestScore = styled.p`
  font-size: 18px;
`;

function ScoreBoard({ turnsCount, score, bestScore, changeLevel, resetGame }) {
  return (
    <Modal>
      <ScoreBoardHeader>Congratulations!</ScoreBoardHeader>
      <ScoreBoardMain>
        You completed the game in <SpanStyled>{turnsCount}</SpanStyled> turns
        and got <SpanStyled>{score}</SpanStyled> points!
      </ScoreBoardMain>
      <ScoreBoardBestScore>Your best score is {bestScore}</ScoreBoardBestScore>
      <Button handleClick={resetGame}>Beat your best score</Button>
      <Button handleClick={changeLevel}>New Game</Button>
    </Modal>
  );
}

export default ScoreBoard;
