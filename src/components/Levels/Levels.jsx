import React from "react";
import styled from "styled-components";

const LevelsStyled = styled.div`
  padding: 5rem 2rem;
  text-align: center;
  font-size: 18px;
  color: #eee;
  opacity: 0.6;

  h1 {
    letter-spacing: 0.5px;
    padding-left: 3rem;
  }
  ul {
    list-style: none;

    li {
      font-size: 22px;
      cursor: pointer;
      padding: 1rem;
      margin: 0.5rem;
      border: 1px solid #eee;
      border-radius: 10px;
      box-shadow: 5px 5px 10px black;
      opacity: 0.6;
      &:hover {
        font-size: 26px;
        opacity: 1;
      }
    }
  }
`;
function Levels() {
  return (
    <LevelsStyled>
      <h1>Please select a difficulty level</h1>
      <ul>
        <li>Easy</li>
        <li>Medium</li>
        <li>Hard</li>
      </ul>
    </LevelsStyled>
  );
}

export default Levels;
