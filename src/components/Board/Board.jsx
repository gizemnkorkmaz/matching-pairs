import React from "react";
import styled from "styled-components";

import Card from "../Card/Card";

import shuffleArray from "../../utils/shuffleArray";
import importAllCardImages from "../../utils/importAllCardImages";

const BoardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Board() {
  const allCards = importAllCardImages(
    require.context(
      "./../../assets/images/frontsides",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const shuffledArray = shuffleArray(Object.keys(allCards));

  return (
    <BoardStyled>
      {shuffledArray.map((card, id) => {
        return <Card image={allCards[card]} id={id} key={id} />;
      })}
    </BoardStyled>
  );
}

export default Board;
