import React from "react";
import styled from "styled-components";

const CardStyled = styled.img`
  width: 200px;
  height: 200px;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  cursor: pointer;
`;

function Card({ image, handleClick }) {
  return <CardStyled src={image} onClick={handleClick} />;
}

export default Card;
