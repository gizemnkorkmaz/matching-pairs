import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: "Oswald", sans-serif;
  text-align: center;
  font-size: 16px;
  padding: 0.2rem 1.5rem;
  margin: 0.5rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  cursor: pointer;
  border: none;
  background: #573c29;
  color: #eee;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

function Button({ handleClick, children }) {
  return <ButtonStyled onClick={handleClick}>{children}</ButtonStyled>;
}

export default Button;
