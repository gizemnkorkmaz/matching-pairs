import React, { useState } from "react";
import styled from "styled-components";

import cover from "../../assets/images/cover/cover.png";

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
      src={isCardFlipped ? image : cover}
      onClick={flipCard}
      data-id={cardId}
    />
  );
}

export default Card;
