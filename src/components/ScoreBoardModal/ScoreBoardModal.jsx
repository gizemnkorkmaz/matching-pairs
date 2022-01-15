import React, { useState } from "react";
import styled from "styled-components";

import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const Header = styled.h1`
  text-align: center;
`;

const Scores = styled.p`
  color: #eee;
  font-size: 24px;
`;

const Span = styled.span`
  font-size: 28px;
`;

const BestScore = styled.p`
  font-size: 18px;
`;

function ScoreBoardModal({
  turnsCount,
  score,
  bestScore,
  changeLevel,
  resetGame,
}) {
  const [isOpenScoreBoardModal, setIsOpenScoreBoardModal] = useState(true);

  return (
    <Modal
      isOpen={isOpenScoreBoardModal}
      setIsOpen={setIsOpenScoreBoardModal}
      isShowCloseButton={false}
    >
      <Header>Congratulations!</Header>
      <Scores>
        You completed the game in <Span>{turnsCount}</Span> turns and got{" "}
        <Span>{score}</Span> points!
      </Scores>
      <BestScore>Your best score is {bestScore}</BestScore>
      <Button onClick={resetGame}>Beat your best score</Button>
      <Button onClick={changeLevel}>New Game</Button>
    </Modal>
  );
}

export default ScoreBoardModal;
