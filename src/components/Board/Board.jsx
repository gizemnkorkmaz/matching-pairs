import React from "react";
import styled from "styled-components";

import Card from "../Card/Card";

import importAllCardImages from "../../utils/importAllCardImages";

const BoardStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Board() {
  const allCards = importAllCardImages(
    require.context(
      "./../../assets/cardImages/frontsides",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <BoardStyled>
      {Object.keys(allCards).map((card, id) => {
        return <Card image={allCards[card]} id={id} key={id} />;
      })}
    </BoardStyled>
  );
}

export default Board;
