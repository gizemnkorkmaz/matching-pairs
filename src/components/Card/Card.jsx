import React, { useState, useEffect } from "react";
import styled from "styled-components";

import cardBackside from "../../assets/images/backside/cardBackside.png";

const CardStyled = styled.img`
  width: 200px;
  height: 200px;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  cursor: pointer;

  .matched {
    border: 1px solid green;
  }
`;

function Card({ image, cardId }) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [cardPair, setCardPair] = useState([]);
  const [isMatched, setIsMatched] = useState(false);

  //check matching status of card pairs
  useEffect(() => {
    if (cardPair.length && cardPair[0] === cardPair[1]) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
  }, [cardPair]);

  const handleCardClick = (event) => {
    if (!isMatched) {
      setIsCardFlipped(!isCardFlipped);
      if (cardPair.length < 2) {
        const newPair = [...cardPair, event.target.dataset.id];
        setCardPair(newPair);
      } else {
        setCardPair([]);
      }
    } else {
      setIsCardFlipped(true);
    }
  };

  return (
    <CardStyled
      src={isCardFlipped ? image : cardBackside}
      onClick={handleCardClick}
      data-id={cardId}
    />
  );
}

export default Card;
