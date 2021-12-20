import React, { useState } from "react";
import styled from "styled-components";

import cardBackside from "../../assets/cardImages/backside/cardBackside.png";

const CardStyled = styled.img`
  width: 200px;
  height: 200px;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  cursor: pointer;
`;

function Card({ image, id }) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const flipCard = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  return (
    <>
      {isCardFlipped ? (
        <CardStyled
          src={image}
          onClick={flipCard}
          id={id}
          isFlipped={isCardFlipped}
        />
      ) : (
        <CardStyled src={cardBackside} onClick={flipCard} id={id} />
      )}
    </>
  );
}

export default Card;
