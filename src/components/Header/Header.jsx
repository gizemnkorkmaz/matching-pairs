import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.h1`
  text-align: center;
  font-size: 42px;
  color: #eee;
  opacity: 0.6;
  margin-bottom: 0;
`;

function Header() {
  return <HeaderStyled>Matching Pairs</HeaderStyled>;
}

export default Header;
