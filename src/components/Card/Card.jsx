import React, { useState } from "react";
import styled from "styled-components";

import cardBackside from "../../assets/images/backside/cardBackside.png";

const CardStyled = styled.img`
  width: 200px;
  height: 200px;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  cursor: pointer;
`;

function Card({ image, cardId }) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <CardStyled
      src={isCardFlipped ? image : cardBackside}
      onClick={flipCard}
      data-id={cardId}
    />
  );
}

export default Card;
