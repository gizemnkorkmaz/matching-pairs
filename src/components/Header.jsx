import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 32px;
  color: #eee;
  opacity: 0.6;
  margin: 0;
  padding: 0;
`;

function Header() {
  return <HeaderStyled>Matching Pairs</HeaderStyled>;
}

export default Header;
