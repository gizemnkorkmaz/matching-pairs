import React from "react";
import styled from "styled-components";

const StatsStyled = styled.div`
  text-align: center;
  color: #eee;
  opacity: 0.6;
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: 900;

  @media (max-width: 1000px) {
    width: 80%;
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

function Stats({ movesCount }) {
  return <StatsStyled>Moves: {movesCount}</StatsStyled>;
}

export default Stats;
