import { useEffect, useState } from "react";
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
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/lists')
    .then(res => res.json())
    .then(listsArr => setLists(listsArr))
  }, [])



  const renderLists = lists.map(list => <Container key={list.id + list.name} {...list} />)
  
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {renderLists}
    </div>
  );
}

export default App;
