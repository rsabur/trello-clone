// import { useState } from "react";
// import { Button, Modal, Form } from "semantic-ui-react";
import styled from "styled-components";
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";

const LaneStyling = styled.div`
  margin-top: 5px;
  diplay: block;
  .lanes {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }
    .list {
        flex-basis: 32%;
        background: rgba(97, 103, 133, 1);
        min-height: 80px;
        box-sizing: content-box;
        margin: 5px 5px 10px;
        padding-bottom: 5px;
    }
    .title {
        position: relative;
        font-weight: bold;
        font-size: 18px;
        background: rgba(19, 19, 19, 0.3);
        padding: 10px 25px 10px 5px;
        display: flex;
        word-break: break-all;
    }
    .new-ticket-button {
        width: 95%;
        padding: 10px 20px;
        margin: 5px;
        border: none;
        outline: none;
        background: rgba(19, 19, 19, 0.2);
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
`

function Lanes({tasks, onAddTasks, onDeleteTask}) {
    const taskInfo = tasks.map(task => <Tasks key={task.id} {...task} onDeleteTask={onDeleteTask} />)

    return (
        <LaneStyling >
            <div className='lanes'id='1'>
                <div className='list'>
                    <div className='title'>To-Do</div>
                    {/* <TaskForm onAddTasks={onAddTasks} /> */}
                    {taskInfo}
                </div>
                <div className='list' id='2'>
                    <div className='title'>Working</div>
                    {/* <TaskForm /> */}
                </div>
                <div className='list' id='3'>
                    <div className='title'>Complete</div>
                    {/* <TaskForm /> */}
                    {/* <Button className='new-ticket-button'>New Ticket</Button> */}
                </div>
            </div>
        </LaneStyling>
    )
}

export default Lanes;