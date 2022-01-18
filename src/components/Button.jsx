import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-family: "Oswald", sans-serif;
  text-align: center;
  font-size: 16px;
  padding: 0.2rem 2rem;
  margin: 0.5rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  cursor: pointer;
  border: none;
  background: #573c29;
  color: #9b9d95;

  @media (max-width: 1000px) {
    width: 100%;
    font-size: 14px;
  }

  @media (max-width: 500px) {
    width: 100%;
    font-size: 12px;
  }
`;

function Button({ children, ...props }) {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
}

export default Button;
