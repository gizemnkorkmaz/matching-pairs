import { useState } from "react";

import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Levels from "./components/Levels/Levels";
import GlobalStyle from "./components/globalStyled";

import duplicateCards from "./utils/duplicateCards";

import data from "./data.json";

function App() {
  const [isStartGame, setIsStartGame] = useState(false);
  const [duplicatedCards, setDuplicatedCards] = useState(null);
  const [gameLevel, setGameLevel] = useState(null);

  const selectLevel = (level) => {
    setIsStartGame(true);
    setGameLevel(level);

    if (level === "easy") {
      setDuplicatedCards(duplicateCards(data, 8));
    } else if (level === "medium") {
      setDuplicatedCards(duplicateCards(data, 12));
    } else if (level === "hard") {
      setDuplicatedCards(duplicateCards(data, 16));
    }
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {isStartGame ? (
        <Board
          duplicatedCards={duplicatedCards}
          setIsStartGame={setIsStartGame}
          gameLevel={gameLevel}
        />
      ) : (
        <Levels selectLevel={selectLevel} />
      )}
    </div>
  );
}

export default App;
