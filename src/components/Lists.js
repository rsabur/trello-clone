// import { useState } from "react";
// import { Button, Modal, Form } from "semantic-ui-react";
import styled from "styled-components";
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";



function Lanes({ tasks, onAddTasks, onDeleteTask }) {
    const taskInfo = tasks.map(task => <Tasks key={task.id} {...task} onDeleteTask={onDeleteTask} />)
    
    return (

        <>
            {taskInfo}
        </>
    )
}

export default Lanes;