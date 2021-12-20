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

  //duplicate the array for matching and shuffle it
  const shuffledArray = [
    ...shuffleArray(Object.values(allCards)),
    ...shuffleArray(Object.values(allCards)),
  ];

  return (
    <BoardStyled>
      {shuffledArray.map((cardId, index) => {
        return (
          <Card image={shuffledArray[index]} cardId={cardId} key={index} />
        );
      })}
    </BoardStyled>
  );
}

export default Board;
