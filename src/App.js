import { useState } from "react";

import GlobalStyle from "./components/globalStyled";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";

import data from "./data.json";
import Levels from "./components/Levels/Levels";

const duplicatedCards = [...data.cards, ...data.cards].map((card) => ({
  ...card,
  id: Math.random(),
}));

function App() {
  const [isShowLevels, setIsShowLevels] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      {isShowLevels ? (
        <Levels />
      ) : (
        <>
          <Header />
          <Board duplicatedCards={duplicatedCards} />
        </>
      )}
    </div>
  );
}

export default App;
