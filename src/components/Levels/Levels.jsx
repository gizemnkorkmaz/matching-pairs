import React, { useState } from "react";

import Board from "../Board/Board";
import Header from "../Header/Header";
import styled from "styled-components";

import duplicateCards from "../../utils/duplicateCards";

import data from "../../data.json";

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
  const [isShowLevels, setIsShowLevels] = useState(true);
  const [duplicatedCards, setDuplicatedCards] = useState(null);

  const startEasyMode = () => {
    setDuplicatedCards(duplicateCards(data, 6));
    setIsShowLevels(false);
  };

  const startMediumMode = () => {
    setDuplicatedCards(duplicateCards(data, 9));
    setIsShowLevels(false);
  };

  const startHardMode = () => {
    setDuplicatedCards(duplicateCards(data, 12));
    setIsShowLevels(false);
  };

  return isShowLevels ? (
    <LevelsStyled>
      <h1>Please select a difficulty level</h1>
      <ul>
        <li onClick={startEasyMode}>Easy</li>
        <li onClick={startMediumMode}>Medium</li>
        <li onClick={startHardMode}>Hard</li>
      </ul>
    </LevelsStyled>
  ) : (
    <>
      <Header />
      <Board duplicatedCards={duplicatedCards} />
    </>
  );
}

export default Levels;
