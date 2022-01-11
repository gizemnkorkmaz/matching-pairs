import React from "react";
import styled from "styled-components";

import Stats from "../Stats/Stats";
import Button from "../Button/Button";

const BoardHeaderStyled = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  color: #eee;
  margin: 0.5rem;
`;

const BoardActionsWrapper = styled.div`
  margin: 0.5rem;
`;

function BoardHeader({ turnsCount, resetGame, changeLevel }) {
  return (
    <BoardHeaderStyled>
      <Stats turnsCount={turnsCount} />
      <BoardActionsWrapper>
        <Button handleClick={resetGame}>Reset Game</Button>
        <Button handleClick={changeLevel}>Change Level</Button>
      </BoardActionsWrapper>
    </BoardHeaderStyled>
  );
}

export default BoardHeader;
