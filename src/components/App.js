import { createGlobalStyle } from "styled-components";
import Container from "./Container";
import Header from "./Header";

const GlobalStyle = createGlobalStyle`
  body {
    color: #fff;
    background: #445094;
    font-size: 16px;
  }
`
function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container />
    </div>
  );
}

export default App;
