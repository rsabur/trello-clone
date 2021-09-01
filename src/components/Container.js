import { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
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
function Container({ tasks, onAddTasks, onDeleteTask }) {
    const [open, setOpen] = useState(false)
    
    return (
        <ContainerStyle className='main-container'>
            {/* <Button className='button'>
                + Add New Lane
            </Button> */}
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button className='new-ticket-button'>New Task</Button>}
            >
                <Modal.Header>Create a New Ticket!</Modal.Header>
                <Modal.Description>
                    <TaskForm onAddTasks={onAddTasks} />
                </Modal.Description>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
            </Modal>
            <div className='second-container'>
                <Lists tasks={tasks} onAddTasks={onAddTasks} onDeleteTask={onDeleteTask} />
            </div>
        </ContainerStyle>
    )
}

export default Container;