import { useState } from "react";
import { Modal } from "semantic-ui-react";
import { Button } from "react-bootstrap"
import styled from "styled-components";
import Lists from "./Lists";
import TaskForm from "./TaskForm";

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

const ListStyling = styled.div`
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
function Container({ id, name, tasks }) {
    const [open, setOpen] = useState(false)
    const [task, setTasks] = useState([...tasks])

    const handleAddTask = (newTask) => {
        const newTaskArr = [newTask, ...task]
        setTasks(newTaskArr)
    }

    const handleDeleteTask = (taskId) => {
        const minusTask = task.filter(task => task.id !== taskId)
        setTasks(minusTask)
    }

    return (

        <ListStyling >
            <div className='list'>
                <div className='title'>{name}</div>
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button className='new-ticket-button'>New Task</Button>}
                >
                    <Modal.Header>Create a New Ticket!</Modal.Header>
                    <Modal.Description>
                        <TaskForm onAddTasks={handleAddTask} />
                    </Modal.Description>
                    <Button color='black' onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                </Modal>
                <Lists tasks={tasks} onAddTasks={handleAddTask} onDeleteTask={handleDeleteTask} />
            </div>
        </ListStyling>

    )
}

export default Container;