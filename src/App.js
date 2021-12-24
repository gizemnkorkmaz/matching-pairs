import { useState, useEffect } from "react";

import GlobalStyle from "./components/globalStyled";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Stats from "./components/Stats/Stats";

import shuffleArray from "./utils/shuffleArray";
import Button from "./components/Button/Button";

import cardImages from "./utils/cardImages";

function App() {
  const [shuffledArray, setShuffledArray] = useState([]);

  //duplicate the array for matching and shuffle it on initial render
  const duplicatedArray = [...cardImages, ...cardImages];
  useEffect(() => {
    setShuffledArray([...shuffleArray(duplicatedArray)]);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Stats />
      <Button />
      <Board shuffledArray={shuffledArray} />
    </div>
  );
}

export default App;
