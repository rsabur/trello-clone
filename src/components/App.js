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

  const handleAddTask = (newTask) => {
    const newTaskArr = [newTask, ...tasks]
    setTasks(newTaskArr)
  }
  const handleDeleteTask = (taskId) => {
    const minusTask = tasks.filter(task => task.id != taskId)
    setTasks(minusTask)
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Container tasks={tasks} onAddTasks={handleAddTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
