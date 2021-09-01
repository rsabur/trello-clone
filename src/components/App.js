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
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(tasksArr => setTasks(tasksArr))
  }, [])

  const handleAddTasks = (newTicket) => {
    const newTicketsArr = [newTicket, ...tasks]
    setTasks(newTicketsArr)
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container tasks={tasks} onAddTasks={handleAddTasks} />
    </div>
  );
}

export default App;
