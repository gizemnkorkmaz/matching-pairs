import React, { useState } from "react";
import styled from "styled-components";

import Card from "../Card/Card";

const BoardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 2rem;
`;

function Board({ shuffledArray }) {
  const [cardPair, setCardPair] = useState([]);
  const [openCardList, setOpenCardList] = useState([]);

  const checkIsMatched = (cardPair) => {
    if (!cardPair.length) return;

    const [firstCardIndex, secondCardIndex] = cardPair;

    const firstCard = shuffledArray[firstCardIndex];
    const secondCard = shuffledArray[secondCardIndex];

    return firstCard === secondCard;
  };

  const handleCardClick = (index) => {
    if (cardPair.includes(index)) return;

    const newCardPair = [...cardPair, index];

    if (cardPair.length === 2) {
      setCardPair([]);
    } else if (cardPair.length === 1) {
      const isMatched = checkIsMatched(newCardPair);
      if (isMatched) {
        setOpenCardList([...openCardList, ...newCardPair]);
      }
      setCardPair(newCardPair);
    } else if (!cardPair.length) {
      setCardPair(newCardPair);
    }
  };

  return (
    <>
      <BoardStyled>
        {shuffledArray.map((card, index) => {
          return (
            <Card
              key={index}
              image={card.src}
              cardId={card.id}
              handleClick={() => handleCardClick(index)}
              isOpen={[...openCardList, ...cardPair].includes(index)}
            />
          );
        })}
      </BoardStyled>
    </>
  );
}

export default Board;
