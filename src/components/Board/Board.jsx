import React, { useState } from "react";
import styled from "styled-components";

import Card from "../Card/Card";
import firstCardFrontside from "../../assets/cardImages/frontsides/card-1.jpeg";
import cardBackside from "../../assets/cardImages/backside/cardBackside.png";

const BoardStyled = styled.div`
  width: 100%;
`;

function Board() {
  const [isImageFlipped, setIsImageFlipped] = useState(false);

  const flipCard = () => {
    setIsImageFlipped(!isImageFlipped);
  };

  return (
    <BoardStyled>
      {isImageFlipped ? (
        <Card image={firstCardFrontside} handleClick={flipCard} />
      ) : (
        <Card image={cardBackside} handleClick={flipCard} />
      )}
    </BoardStyled>
  );
}

export default Board;
