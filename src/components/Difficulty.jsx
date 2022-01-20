import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const DifficultyStyled = styled.div`
  padding: 2rem;
  text-align: center;
  font-size: 18px;
  color: #eee;
  opacity: 0.6;
`;

const Header = styled.h1`
  letter-spacing: 0.5px;
  text-align: center;
  opacity: 0.6;
`;

const ButtonContainer = styled.div``;

const Button = styled.button`
font-size: 22px;
cursor: pointer;
padding: 1rem 3rem;
margin: 0.5rem;
border-radius: 10px;
box-shadow: 5px 5px 10px black;
cursor: pointer;
border: none;
background: #573c29;
color: #eee;
font-family: "Oswald", sans-serif;
width: 60%;
text-align: center

&:hover {
  font-size: 26px;
  opacity: 1;
}
`;

function Difficulty({ selectDifficulty }) {
  return (
    <>
      <DifficultyStyled>
        <Header>Please select a difficulty level</Header>
        <ButtonContainer>
          <Button onClick={() => selectDifficulty("easy")}>Easy</Button>
          <Button onClick={() => selectDifficulty("medium")}>Medium</Button>
          <Button onClick={() => selectDifficulty("hard")}>Hard</Button>
        </ButtonContainer>
      </DifficultyStyled>
      <Footer />
    </>
  );
}

export default Difficulty;
