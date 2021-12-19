import GlobalStyle from "./components/globalStyled";
import Header from "./components/Header/Header";
import Board from "./components/Board/Board";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Board />
    </div>
  );
}

export default App;
