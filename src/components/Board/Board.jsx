import React, { useState } from "react";
import styled from "styled-components";

import Card from "../Card/Card";
import importAllCardImages from "../../utils/importAllCardImages";
import cardBackside from "../../assets/cardImages/backside/cardBackside.png";

const BoardStyled = styled.div`
  width: 100%;
`;

function Board() {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  const allCards = importAllCardImages(
    require.context(
      "./../../assets/cardImages/frontsides",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <BoardStyled>
      {Object.keys(allCards).map((cardItem, index) => {
        return isCardFlipped ? (
          <Card image={allCards[cardItem]} handleClick={flipCard} key={index} />
        ) : (
          <Card image={cardBackside} handleClick={flipCard} />
        );
      })}
    </BoardStyled>
  );
}

export default Board;
