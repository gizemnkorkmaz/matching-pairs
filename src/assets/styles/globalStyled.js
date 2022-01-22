import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: #1e230f;
    font-family: 'Oswald', sans-serif;
  }

  .App {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .easy {
    padding: 4rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .medium {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  
  .hard {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    
    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export default GlobalStyle;
