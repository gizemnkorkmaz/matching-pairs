import { useState, useEffect } from "react";

import GlobalStyle from "./components/globalStyled";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";

import importAllCardImages from "./utils/importAllCardImages";
import shuffleArray from "./utils/shuffleArray";

function App() {
  const [shuffledArray, setShuffledArray] = useState([]);

  //make an array of images
  const allCards = importAllCardImages(
    require.context("./assets/images/cards", false, /\.(png|jpe?g|svg)$/)
  );

  //duplicate the array for matching and shuffle it on initial render
  useEffect(() => {
    setShuffledArray([
      ...shuffleArray(Object.values(allCards)),
      ...shuffleArray(Object.values(allCards)),
    ]);
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
