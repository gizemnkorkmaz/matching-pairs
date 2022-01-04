import React, { useState } from "react";
import styled from "styled-components";

import Card from "../Card/Card";
import Stats from "../Stats/Stats";
import Button from "../Button/Button";

import shuffleArray from "../../utils/shuffleArray";
import getNameById from "../../utils/getNameById";

const BoardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 1rem;
  justify-content: center;
  max-width: 1400px;
`;

function Board({ duplicatedCards, setIsStartGame, gameLevel }) {
  const [cards, setCards] = useState(shuffleArray(duplicatedCards));
  const [cardPair, setCardPair] = useState([]);
  const [flippedCardList, setFlippedCardList] = useState([]);
  const [movesCount, setMovesCount] = useState(0);

  const handleCardClick = (id) => {
    if (cardPair.includes(id)) return;

    const currentCardPair = [...cardPair, id];
    const [firstCardId, secondCardId] = currentCardPair;

    if (cardPair.length === 1) {
      const firstCardName = getNameById(cards, firstCardId);
      const secondCardName = getNameById(cards, secondCardId);

      if (firstCardName === secondCardName) {
        setFlippedCardList([...flippedCardList, ...currentCardPair]);
      }

      setCardPair(currentCardPair);
    } else if (!cardPair.length) {
      setCardPair(currentCardPair);
    }
    if (currentCardPair.length === 2) {
      setMovesCount(movesCount + 1);
      setTimeout(() => setCardPair([]), 1000);
    }
  };

  const resetGame = () => {
    setCards(shuffleArray(duplicatedCards));
    setCardPair([]);
    setFlippedCardList([]);
    setMovesCount(0);
  };

  const changeLevel = () => {
    setIsStartGame(false);
  };

  return (
    <>
      <Stats movesCount={movesCount}>
        <Button handleClick={resetGame}> Reset Game</Button>
        <Button handleClick={changeLevel}> Change Difficulty</Button>
      </Stats>
      <BoardStyled className={gameLevel}>
        {cards.map((card) => {
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
