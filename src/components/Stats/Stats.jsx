import React from "react";
import styled from "styled-components";

const StatsStyled = styled.h2`
  text-align: center;
  color: #eee;
  opacity: 0.6;
`;

function Stats({ clickCount }) {
  return <StatsStyled>Clicks: {clickCount}</StatsStyled>;
}

export default Stats;
