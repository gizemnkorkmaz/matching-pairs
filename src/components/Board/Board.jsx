import React, { useState } from "react";
import styled from "styled-components";

import Card from "../Card/Card";

import getNamesByIds from "../../utils/getNamesByIds";

const BoardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 2rem;
  justify-content: center;
`;

function Board({ shuffledArray }) {
  const [cardPair, setCardPair] = useState([]);
  const [openCardList, setOpenCardList] = useState([]);

  const handleCardClick = (id) => {
    if (cardPair.includes(id)) return;

    const newCardPair = [...cardPair, id];
    const [firstCard, secondCard] = newCardPair;

    if (cardPair.length === 2) {
      setCardPair([]);
    } else if (cardPair.length === 1) {
      const firstCardName = getNamesByIds(shuffledArray, firstCard);
      const secondCardName = getNamesByIds(shuffledArray, secondCard);
      if (firstCardName === secondCardName) {
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
              handleClick={() => handleCardClick(card.id)}
              isOpen={[...openCardList, ...cardPair].includes(card.id)}
            />
          );
        })}
      </BoardStyled>
    </>
  );
}

export default Board;
