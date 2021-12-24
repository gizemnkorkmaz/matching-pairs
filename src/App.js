import { useState, useEffect } from "react";

import GlobalStyle from "./components/globalStyled";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Stats from "./components/Stats/Stats";

import importAllCardImages from "./utils/importAllCardImages";
import shuffleArray from "./utils/shuffleArray";
import Button from "./components/Button/Button";

function App() {
  const [shuffledArray, setShuffledArray] = useState([]);

  //make an array of images
  const allCards = importAllCardImages(
    require.context("./assets/images/cards", false, /\.(png|jpe?g|svg)$/)
  );

  //duplicate the array for matching and shuffle it on initial render
  const duplicatedArray = [
    ...Object.values(allCards),
    ...Object.values(allCards),
  ];
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
