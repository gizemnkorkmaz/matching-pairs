import React, { useState } from "react";
import styled from "styled-components";

import Card from "../Card/Card";

import shuffleArray from "../../utils/shuffleArray";
import importAllCardImages from "../../utils/importAllCardImages";
import Stats from "../Stats/Stats";
import { useEffect } from "react/cjs/react.development";

const BoardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardContainer = styled.div``;

function Board() {
  const [clickCount, setClickCount] = useState(0);
  const [shuffledArray, setShuffledArray] = useState([]);

  //make an array of images
  const allCards = importAllCardImages(
    require.context(
      "./../../assets/images/frontsides",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  //increment the click count
  const handleCardClick = () => {
    setClickCount(clickCount + 1);
  };

  //duplicate the array for matching and shuffle it on initial render
  useEffect(() => {
    setShuffledArray([
      ...shuffleArray(Object.values(allCards)),
      ...shuffleArray(Object.values(allCards)),
    ]);
  }, []);

  return (
    <>
      <Stats clickCount={clickCount} />
      <BoardStyled>
        {shuffledArray.map((cardId, index) => {
          return (
            <CardContainer onClick={handleCardClick} key={index}>
              <Card image={shuffledArray[index]} cardId={cardId} />
            </CardContainer>
          );
        })}
      </BoardStyled>
    </>
  );
}

export default Board;
