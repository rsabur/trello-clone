import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Container from "./Container";
import Header from "./Header";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

const GlobalStyle = createGlobalStyle`
  body {
    color: #fff;
    background: #445094;
    font-size: 16px;
  }
  .button {
    width: 15%;
    padding: 10px 20px;
    margin: 5px;
    border: none;
    outline: none;
    background: rgba(19, 19, 19, 0.2);
    color: rgb(255, 255, 255);
    cursor: pointer;
}
`

const ContainerStyle = styled.div`
    max-width: 1200px;
    padding: 0px 10px 10px;
    margin: 20px auto 0px;
    .button {
        display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(78, 78, 78, 0.13);
    margin-bottom: 10px;
    padding-bottom: 10px;
    }
    .lanes {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
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
      <ContainerStyle className='main-container'>
      <Button className='button'>
        + Add New Lane
      </Button>
        <div className='second-container'>
          <div className='lanes'>
            {renderLists}
          </div>
        </div>
      </ContainerStyle>
    </div>
  );
}

export default App;
