import React from "react";
import styled from "styled-components";

import cover from "../../assets/images/cover/cover.png";

const CardStyled = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 120px;
    height: 120px;
  }
`;

function Card({ image, cardId, isOpen, handleClick }) {
  return (
    <CardStyled
      onClick={handleClick}
      src={isOpen ? image : cover}
      cardId={cardId}
    />
  );
}

export default Card;
