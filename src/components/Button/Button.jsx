import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: "Oswald", sans-serif;
  font-size: 22px;
  padding: 0.2rem 1.5rem;
  margin: 0.5rem;
  color: black;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  cursor: pointer;
  border: none;
  background: #573c29;
  color: #eee;
  opacity: 0.6;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

function Button({ handleClick, buttonName }) {
  return <ButtonStyled onClick={handleClick}>{buttonName}</ButtonStyled>;
}

export default Button;
