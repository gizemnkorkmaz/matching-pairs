import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Stats from "../Stats/Stats";
import Card from "../Card/Card";

const BoardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardContainer = styled.div``;

function Board({ shuffledArray }) {
  const [clickCount, setClickCount] = useState(0);
  const [cardPair, setCardPair] = useState([]);
  const [isMatched, setIsMatched] = useState(false);

  //check matching status of card pairs
  useEffect(() => {
    if (cardPair.length && cardPair[0] === cardPair[1]) {
      setIsMatched(true);
      setCardPair([]);
    }
    if (cardPair.length && cardPair[0] !== cardPair[1]) {
      setIsMatched(false);
      setCardPair([]);
    }
  }, [cardPair]);

  //increment the click count && update card pairs
  const handleCardClick = (event) => {
    setClickCount(clickCount + 1);
    if (cardPair.length < 2) {
      const newPair = [...cardPair, event.target.dataset.id];
      setCardPair(newPair);
    }
    console.log(cardPair, isMatched);
  };

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
