import React, { useState } from "react";
import styled from "styled-components";

import Card from "../Card/Card";
import BoardHeader from "../BoardHeader/BoardHeader";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

import shuffleArray from "../../utils/shuffleArray";
import getNameById from "../../utils/getNameById";

const BoardStyled = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
`;

function Board({ duplicatedCards, setIsStartGame, gameLevel }) {
  const [cards, setCards] = useState(shuffleArray(duplicatedCards));
  const [cardPair, setCardPair] = useState([]);
  const [flippedCardList, setFlippedCardList] = useState([]);
  const [turnsCount, setTurnsCount] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const calculateScore = () => {
    const maxScore = 10000;
    const uniqueCardCount = cards.length / 2;
    const finalScore = Math.floor(maxScore * (uniqueCardCount / turnsCount));

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
          setIsGameOver(true);
        }
      }

      setCardPair(currentCardPair);
    } else if (!cardPair.length) {
      setCardPair(currentCardPair);
    }

    if (currentCardPair.length === 2) {
      setTurnsCount(turnsCount + 1);
      setTimeout(() => setCardPair([]), 1000);
    }
  };

  const resetGame = () => {
    setCards(shuffleArray(duplicatedCards));
    setCardPair([]);
    setFlippedCardList([]);
    setTurnsCount(0);
    setScore(0);
    setIsGameOver(false);
  };

  const changeLevel = () => {
    setIsStartGame(false);
    setIsGameOver(false);
  };

  return (
    <>
      <BoardHeader
        turnsCount={turnsCount}
        resetGame={resetGame}
        changeLevel={changeLevel}
      />
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
      {isGameOver && (
        <ScoreBoard
          turnsCount={turnsCount}
          score={score}
          highScore={highScore}
          changeLevel={changeLevel}
          resetGame={resetGame}
        />
      )}
    </>
  );
}

export default Board;
