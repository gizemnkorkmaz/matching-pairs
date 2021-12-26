import React from "react";
import styled from "styled-components";

import data from "../../data.json";

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
  @media (max-width: 500px) {
    width: 75px;
    height: 75px;
  }
`;

function Card({ image, cardId, isFlipped, handleClick }) {
  return (
    <CardStyled
      onClick={handleClick}
      src={isFlipped ? image : data.cover.src}
      data-id={cardId}
    />
  );
}

export default Card;
