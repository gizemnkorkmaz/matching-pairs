import GlobalStyle from "./components/globalStyled";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";

import data from "./data.json";

const duplicatedCards = [...data.cards, ...data.cards].map((card) => ({
  ...card,
  id: Math.random(),
}));

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Board duplicatedCards={duplicatedCards} />
    </div>
  );
}

export default App;
