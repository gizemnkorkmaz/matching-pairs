import React, { useState } from "react";
import styled from "styled-components";

import Card from "./Card";
import BoardHeader from "./BoardHeader";
import ScoreBoardModal from "./ScoreBoardModal";

import shuffleArray from "../utils/shuffleArray";
import getNameById from "../utils/getNameById";

const BoardStyled = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
`;

function Board({ duplicatedCards, setIsStartGame, gameDifficulty }) {
  const [cards, setCards] = useState(shuffleArray(duplicatedCards));
  const [cardPair, setCardPair] = useState([]);
  const [flippedCardList, setFlippedCardList] = useState([]);
  const [turnsCount, setTurnsCount] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isOpenScoreBoard, setIsOpenScoreBoard] = useState(false);

  const calculateScore = () => {
    const maxScore = 10000;
    const uniqueCardCount = cards.length / 2;
    const finalScore = Math.floor(maxScore * (uniqueCardCount / turnsCount));
    setScore(finalScore);

    if (finalScore > bestScore) {
      setBestScore(finalScore);
    }
  };

  const resetCardPair = () => setCardPair([]);

  const handleCardClick = (id) => {
    clearTimeout(window.cardFlipTimer);

    if (cardPair.includes(id)) return;

    const currentCardPair = [...cardPair, id];

    if (currentCardPair.length === 3) {
      setCardPair([id]);
    } else {
      setCardPair(currentCardPair);
    }

    if (currentCardPair.length !== 2) return;

    setTurnsCount(turnsCount + 1);

    const [firstCardName, secondCardName] = currentCardPair.map((cardId) =>
      getNameById(cards, cardId)
    );

    if (firstCardName === secondCardName) {
      const currentFlippedCards = [...flippedCardList, ...currentCardPair];
      setFlippedCardList(currentFlippedCards);
      resetCardPair();

      if (cards.length === currentFlippedCards.length) {
        calculateScore();
        setTimeout(() => setIsOpenScoreBoard(true), 1000);
      }
    } else {
      window.cardFlipTimer = setTimeout(resetCardPair, 1000);
    }
  };

  const resetGame = () => {
    setCards(shuffleArray(duplicatedCards));
    setCardPair([]);
    setFlippedCardList([]);
    setTurnsCount(0);
    setScore(0);
    setIsOpenScoreBoard(false);
  };

  const changeLevel = () => {
    setIsStartGame(false);
    setIsOpenScoreBoard(false);
  };

  return (
    <>
      <BoardHeader
        turnsCount={turnsCount}
        resetGame={resetGame}
        changeLevel={changeLevel}
      />
      <BoardStyled className={gameDifficulty}>
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.src}
            cardId={card.id}
            handleClick={() => handleCardClick(card.id)}
            isFlipped={[...flippedCardList, ...cardPair].includes(card.id)}
          />
        ))}
      </BoardStyled>
      <ScoreBoardModal
        isOpen={isOpenScoreBoard}
        setIsOpen={setIsOpenScoreBoard}
        turnsCount={turnsCount}
        score={score}
        bestScore={bestScore}
        changeLevel={changeLevel}
        resetGame={resetGame}
      />
    </>
  );
}

export default Board;
