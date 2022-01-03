import { useState } from "react";

import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Levels from "./components/Levels/Levels";
import GlobalStyle from "./components/globalStyled";

import duplicateCards from "./utils/duplicateCards";
import data from "./data.json";

function App() {
  const [isStartGame, setIsStartGame] = useState(true);
  const [duplicatedCards, setDuplicatedCards] = useState(null);
  const [gameLevel, setGameLevel] = useState(null);

  const selectLevel = (level) => {
    setIsStartGame(false);
    if (level === "easy") {
      setDuplicatedCards(duplicateCards(data, 8));
      setGameLevel("easy");
    } else if (level === "medium") {
      setDuplicatedCards(duplicateCards(data, 12));
      setGameLevel("medium");
    } else if (level === "hard") {
      setDuplicatedCards(duplicateCards(data, 16));
      setGameLevel("hard");
    }
  };
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {isStartGame ? (
        <Levels selectLevel={selectLevel} />
      ) : (
        <Board
          duplicatedCards={duplicatedCards}
          setIsStartGame={setIsStartGame}
          gameLevel={gameLevel}
        />
      )}
    </div>
  );
}

export default App;
