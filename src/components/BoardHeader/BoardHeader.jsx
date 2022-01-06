import React from "react";
import styled from "styled-components";

const BoardHeaderStyled = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  color: #eee;
  opacity: 0.6;
  margin: 0.5rem;
`;

function BoardHeader({ children }) {
  return <BoardHeaderStyled>{children}</BoardHeaderStyled>;
}

export default BoardHeader;
