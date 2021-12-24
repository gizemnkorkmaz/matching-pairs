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

function Card({ image, cardId, isOpen, onClick }) {
  return (
    <CardStyled
      onClick={onClick}
      src={isOpen ? image : cover}
      data-id={cardId}
    />
  );
}

export default Card;
