import React from "react";
import styled from "styled-components";

const DifficultyStyled = styled.div`
  padding: 2rem;
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

function Difficulty({ selectDifficulty }) {
  return (
    <DifficultyStyled>
      <h1>Please select a difficulty level</h1>
      <div>
        <button onClick={() => selectDifficulty("easy")}>Easy</button>
        <button onClick={() => selectDifficulty("medium")}>Medium</button>
        <button onClick={() => selectDifficulty("hard")}>Hard</button>
      </div>
    </DifficultyStyled>
  );
}

export default Difficulty;
