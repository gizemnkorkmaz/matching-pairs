import React, { useState } from "react";
import styled from "styled-components";

import Card from "../Card/Card";
import Stats from "../Stats/Stats";
import Button from "../Button/Button";
import BoardHeader from "../BoardHeader/BoardHeader";

import shuffleArray from "../../utils/shuffleArray";
import getNameById from "../../utils/getNameById";

const BoardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  justify-content: center;
  max-width: 1400px;
`;

function Board({ duplicatedCards, setIsStartGame, gameLevel }) {
  const [cards, setCards] = useState(shuffleArray(duplicatedCards));
  const [cardPair, setCardPair] = useState([]);
  const [flippedCardList, setFlippedCardList] = useState([]);
  const [movesCount, setMovesCount] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const calculateScore = () => {
    const maxScore = 10000;
    const uniqueCardCount = cards.length / 2;
    const finalScore = Math.floor(maxScore * (uniqueCardCount / movesCount));

    setScore(finalScore);

    if (finalScore > highScore) {
      setHighScore(finalScore);
    }
  };

  const handleCardClick = (id) => {
    if (cardPair.includes(id)) return;

    const currentCardPair = [...cardPair, id];
    const [firstCardId, secondCardId] = currentCardPair;

    if (cardPair.length === 1) {
      const firstCardName = getNameById(cards, firstCardId);
      const secondCardName = getNameById(cards, secondCardId);

      if (firstCardName === secondCardName) {
        const currentFlippedCards = [...flippedCardList, ...currentCardPair];

        setFlippedCardList(currentFlippedCards);

        if (currentFlippedCards.length === cards.length) {
          calculateScore();
        }
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
    setScore(0);
  };

  const changeLevel = () => {
    setIsStartGame(false);
  };

  return (
    <>
      <BoardHeader>
        <Stats movesCount={movesCount} score={score} highScore={highScore} />
        <div className="button-container">
          <Button handleClick={resetGame}>Reset Game</Button>
          <Button handleClick={changeLevel}>Change Difficulty</Button>
        </div>
      </BoardHeader>
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
