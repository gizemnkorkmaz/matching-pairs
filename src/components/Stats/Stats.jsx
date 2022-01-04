import React from "react";
import styled from "styled-components";

const StatsStyled = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 3rem;
  color: #eee;
  opacity: 0.6;
  margin: 0;
  padding: 0;
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
