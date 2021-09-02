import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { createGlobalStyle } from "styled-components";
import Container from "./Container";
import Header from "./Header";
import styled from "styled-components";


// Gloabl styling for the app
const GlobalStyle = createGlobalStyle`
  body {
    color: #fff;
    background: #445094;
    font-size: 16px;
  }
  .button {
    width: 20%;
    padding: 10px 20px;
    margin: 5px;
    border: rgba(19, 19, 19, 0.5) solid;
    outline: none;
    background: rgba(19, 19, 19, 0.2);
    color: rgb(255, 255, 255);
    cursor: pointer;
}
`

// styling for the outter main-container
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
    .new-ticket-button {
        width: 20%;
        padding: 10px 20px;
        margin: 5px;
        border: rgba(19, 19, 19, 0.5) solid;
        outline: none;
        background: rgba(19, 19, 19, 0.2);
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
`


function App() {
  // initializing state for this lists and for loading of the page
  const [lists, setLists] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  // fetching list data from server
  useEffect(() => {
    fetch('http://localhost:3000/lists')
      .then(res => res.json())
      .then(listsArr => {
        setLists(listsArr)
        setIsLoaded(true)
      })
  }, [])

  // checking for if data from our fetch is loaded or now
  if (!isLoaded) return <h2>Loading...</h2>

  // mapping through the available list data to render each on on the DOM
  const renderList = lists.map(list => <Container key={list.name + list.id} {...list} />)

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Button className='button'>
        + Add New Lane
      </Button>
      <ContainerStyle className='main-container'>
        <div className='second-container'>
          {renderList}
        </div>
      </ContainerStyle>
    </div>
  );
}

export default App;
