import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Card from "../Card/Card";
import Stats from "../Stats/Stats";

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
  const [flippedCardList, setFlippedCardList] = useState([]);
  const [movesCount, setMovesCount] = useState(0);

  useEffect(() => {
    if (cardPair.length === 2) {
      setMovesCount(movesCount + 1);
      setTimeout(() => setCardPair([]), 1000);
    }
  }, [cardPair]);

  const handleCardClick = (id) => {
    if (cardPair.includes(id)) return;

    const currentCardPair = [...cardPair, id];
    const [firstCardId, secondCardId] = currentCardPair;

    if (cardPair.length === 1) {
      const firstCardName = getNamesByIds(shuffledArray, firstCardId);
      const secondCardName = getNamesByIds(shuffledArray, secondCardId);

      if (firstCardName === secondCardName) {
        setFlippedCardList([...flippedCardList, ...currentCardPair]);
      }

      setCardPair(currentCardPair);
    } else if (!cardPair.length) {
      setCardPair(currentCardPair);
    }
  };

  return (
    <>
      <Stats movesCount={movesCount} />
      <BoardStyled>
        {shuffledArray.map((card) => {
          return (
            <Card
              key={card.id}
              image={card.src}
              cardId={card.id}
              handleClick={() => handleCardClick(card.id)}
              isFlipped={[...flippedCardList, ...cardPair].includes(card.id)}
            />
          );
        })}
      </BoardStyled>
    </>
  );
}

export default Board;
