import React from "react";
import styled from "styled-components";

const StatsStyled = styled.h2`
  text-align: center;
  color: #eee;
  opacity: 0.6;
  margin: 0;
`;

function Stats({ movesCount }) {
  return <StatsStyled>Moves: {movesCount}</StatsStyled>;
}

export default Stats;
