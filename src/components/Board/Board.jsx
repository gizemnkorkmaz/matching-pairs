import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Stats from "../Stats/Stats";
import Card from "../Card/Card";

import shuffleArray from "../../utils/shuffleArray";
import importAllCardImages from "../../utils/importAllCardImages";

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
  const [cardPair, setCardPair] = useState([]);

  //make an array of images
  const allCards = importAllCardImages(
    require.context(
      "./../../assets/images/frontsides",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  //duplicate the array for matching and shuffle it on initial render
  useEffect(() => {
    setShuffledArray([
      ...shuffleArray(Object.values(allCards)),
      ...shuffleArray(Object.values(allCards)),
    ]);
  }, []);

  //check matching status of card pairs
  useEffect(() => {
    if (cardPair[0] === cardPair[1] && cardPair.length) {
      console.log("it's a match!");
    } else {
      console.log("will flip");
    }
  }, [cardPair]);

  //increment the click count && update card pairs
  const handleCardClick = (event) => {
    setClickCount(clickCount + 1);
    if (cardPair.length < 2) {
      setCardPair([...cardPair, event.target.dataset.id]);
    } else {
      setCardPair([]);
    }
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
