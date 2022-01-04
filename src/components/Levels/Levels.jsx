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
    text-align: center;
    opacity: 0.6;
  }

  button {
    font-size: 22px;
    cursor: pointer;
    padding: 1rem 3rem;
    margin: 0.5rem;
    border-radius: 10px;
    box-shadow: 5px 5px 10px black;
    cursor: pointer;
    border: none;
    background: #573c29;
    color: #eee;
    font-family: "Oswald", sans-serif;
    width: 60%;
    text-align: center
    
    &:hover {
      font-size: 26px;
      opacity: 1;
    }
  }
`;

function Levels({ selectLevel }) {
  return (
    <LevelsStyled>
      <h1>Please select a difficulty level</h1>
      <div>
        <button onClick={() => selectLevel("easy")}>Easy</button>
        <button onClick={() => selectLevel("medium")}>Medium</button>
        <button onClick={() => selectLevel("hard")}>Hard</button>
      </div>
    </LevelsStyled>
  );
}

export default Levels;
