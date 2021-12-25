import { useState, useEffect } from "react";

import GlobalStyle from "./components/globalStyled";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Stats from "./components/Stats/Stats";

import shuffleArray from "./utils/shuffleArray";
import cardImages from "./utils/cardImages";

function App() {
  const [shuffledArray, setShuffledArray] = useState([]);

  //duplicate the card array for matching, add random ids and shuffle it on initial render
  const duplicatedCards = [...cardImages, ...cardImages].map((card) => ({
    ...card,
    id: Math.random(),
  }));

  useEffect(() => {
    setShuffledArray([...shuffleArray(duplicatedCards)]);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Board shuffledArray={shuffledArray} />
    </div>
  );
}

export default App;
