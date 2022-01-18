import { useState } from "react";

import Header from "./components/Header";
import Board from "./components/Board";
import Difficulty from "./components/Difficulty";
import GlobalStyle from "./components/globalStyled";

import duplicateCards from "./utils/duplicateCards";

import data from "./data.json";

function App() {
  const [isStartGame, setIsStartGame] = useState(false);
  const [duplicatedCards, setDuplicatedCards] = useState(null);
  const [gameDifficulty, setGameDifficulty] = useState(null);

  const selectDifficulty = (difficulty = "easy") => {
    const cardCounts = {
      easy: 4,
      medium: 8,
      hard: 12,
    };

    const cards = duplicateCards(data, cardCounts[difficulty]);

    setDuplicatedCards(cards);
    setGameDifficulty(difficulty);
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
          gameDifficulty={gameDifficulty}
        />
      ) : (
        <Difficulty selectDifficulty={selectDifficulty} />
      )}
    </div>
  );
}

export default App;
