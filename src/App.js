import { useState } from "react";

import Header from "./components/Header/Header";
import Board from "./components/Board/Board";
import Levels from "./components/Levels/Levels";
import GlobalStyle from "./components/globalStyled";

import data from "./data.json";

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
