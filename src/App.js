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

  const selectLevel = (level = "easy") => {
    const cardCounts = {
      easy: 6,
      medium: 8,
      hard: 12,
    };

    const cards = duplicateCards(data, cardCounts[level]);

    setDuplicatedCards(cards);
    setGameLevel(level);
    setIsStartGame(true);
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
