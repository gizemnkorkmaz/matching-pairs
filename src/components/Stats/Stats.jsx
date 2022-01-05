import React from "react";
import styled from "styled-components";

const StatsStyled = styled.div`
  max-width: 900px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: nowrap;
  gap: 3rem;
  color: #eee;
  opacity: 0.6;
  margin: 1rem;
  padding: 0;
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

function Stats({ score, highScore, children }) {
  return (
    <StatsStyled>
      <span>Score: {score}</span>
      <span>{children}</span>
      <span>High Score: {highScore}</span>
    </StatsStyled>
  );
}

export default Stats;
