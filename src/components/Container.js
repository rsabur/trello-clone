import { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import styled from "styled-components";
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";

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
    // .new-ticket-button {
    //     width: 20%;
    //     padding: 10px 20px;
    //     margin: 5px;
    //     border: rgba(19, 19, 19, 0.5) solid;
    //     outline: none;
    //     background: rgba(19, 19, 19, 0.2);
    //     color: rgb(255, 255, 255);
    //     cursor: pointer;
    }
`

// styling for inner second-container
const LaneStyling = styled.div`
  margin-top: 5px;
  diplay: block;
  .lanes {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }
    .list {
        flex-basis: 25%;
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
    // .new-ticket-button {
    //     width: 95%;
    //     padding: 10px 20px;
    //     margin: 5px;
    //     border: none;
    //     outline: none;
    //     background: rgba(19, 19, 19, 0.2);
    //     color: rgb(255, 255, 255);
    //     cursor: pointer;
    // }
`

function Container({ id, name, tasks }) {
    // holding state for opening modal and adding new tasks
    const [open, setOpen] = useState(false)
    const [task, setTask] = useState([...tasks])
    
    // this is a helper function to add new tasks and set them in state for rendering to the DOM
    const handleAddTask = (newTask) => {
        const newTaskArr = [newTask, ...task]
        setTask(newTaskArr)
    }

    // this is a helper function to filter out removed tasks by id 
    const handleDeleteTask = (taskId) => {
        const minusTask = task.filter(task => task.id !== taskId)
        setTask(minusTask)
    }
    
    const taskInfo = task.map(task => <Tasks key={task.id + name} {...task} onDeleteTask={handleDeleteTask} listId={id} />)

    return (
        <ContainerStyle className='main-container'>
            {/* <Button className='button'>
                + Add New Lane
            </Button> */}
            <div className='second-container'>
                <LaneStyling>
                    <div className='lanes'>
                        <div className='list'>
                            <div className='title'>{name}</div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button className='new-ticket-button'>New Task</Button>}>
                <Modal.Header>Create a New Ticket!</Modal.Header>
                <Modal.Description>
                    <TaskForm onAddTasks={handleAddTask} id={id} task={task} />
                </Modal.Description>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
            </Modal>
                            {taskInfo}
                        </div>
                    </div>
                </LaneStyling>
            </div>
        </ContainerStyle>
    )
}

export default Container;

// import { useState } from "react";
// import { Modal, Button } from "semantic-ui-react";

// import styled from "styled-components";
// import TaskForm from "./TaskForm";
// import Tasks from "./Tasks";



// // styling for inner second-container
// const LaneStyling = styled.div`
//     .list {
//         flex-basis: 10%;
//         background: rgba(97, 103, 133, 1);
//         min-height: 80px;
//         box-sizing: content-box;
//         margin: 5px 5px 10px;
//         padding-bottom: 5px;
//     }
//     .title {
//         position: relative;
//         font-weight: bold;
//         font-size: 18px;
//         background: rgba(19, 19, 19, 0.3);
//         padding: 10px 25px 10px 5px;
//         display: flex;
//         word-break: break-all;
//     }
//     .new-ticket-button {
//         width: 95%;
//         padding: 10px 20px;
//         margin: 5px;
//         border: none;
//         outline: none;
//         background: rgba(19, 19, 19, 0.2);
//         color: rgb(255, 255, 255);
//         cursor: pointer;
//     }
// `

// function Container({ id, name, tasks }) {
//     // holding state for opening modal and adding new tasks
//     const [open, setOpen] = useState(false)
//     const [task, setTask] = useState([...tasks])

//     // this is a helper function to add new tasks and set them in state for rendering to the DOM
//     const handleAddTask = (newTask) => {
//         const newTaskArr = [newTask, ...task]
//         setTask(newTaskArr)
//     }

//     // this is a helper function to filter out removed tasks by id 
//     const handleDeleteTask = (taskId) => {
//         const minusTask = task.filter(task => task.id !== taskId)
//         setTask(minusTask)
//     }

//     // 
//     const taskInfo = task.map(task => <Tasks key={task.id + name} {...task} onDeleteTask={handleDeleteTask} listId={id} />)

//     return (
//         <LaneStyling>
//             <div className="list">
//                 <div className='title'>{name}</div>
//                 <Modal
//                     onClose={() => setOpen(false)}
//                     onOpen={() => setOpen(true)}
//                     open={open}
//                     trigger={<button className='new-ticket-button'>New Task</button>}>
//                     <Modal.Header>Create a New Ticket!</Modal.Header>
//                     <Modal.Description>
//                         <TaskForm onAddTasks={handleAddTask} id={id} task={task} />
//                     </Modal.Description>
//                     <Button color='black' onClick={() => setOpen(false)}>
//                         Cancel
//                     </Button>
//                 </Modal>
//                 {taskInfo}
//             </div>
//         </LaneStyling>
//     )
// }

// export default Container;