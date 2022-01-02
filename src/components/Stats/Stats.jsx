import React from "react";
import styled from "styled-components";

const StatsStyled = styled.div`
  max-width: 1400px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: #eee;
  opacity: 0.6;
  margin: 0;
  padding: 0 2rem;
  font-size: 18px;
`;

function Stats({ movesCount, children }) {
  return (
    <StatsStyled>
      <p>Moves: {movesCount}</p>
      <span>{children}</span>
    </StatsStyled>
  );
}

export default Stats;
