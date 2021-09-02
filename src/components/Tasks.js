import { useState } from "react";
import { Button, Card } from "react-bootstrap";
// import { Card } from "semantic-ui-react";

function Tasks({ id, name, description, onDeleteTask, listId }) {
    const [movedListId, setMovedListId] = useState()

    const handleDelete = (id) => {
        console.log(id)
        // fetch(`http://localhost:3000/lists/${id}`, {
        //     method: 'DELETE'
        // })
        onDeleteTask(id)
    }

    const handleRightClick = () => {
        if(listId === 1) setMovedListId(listId + 1)
        else if (listId === 2) setMovedListId(listId + 1)
        console.log('current id:', listId)
        console.log("move id:", movedListId)
    }

    const handleLeftClick = () => {
        if(listId === 2) setMovedListId(listId - 1)
        else if(listId === 3) setMovedListId(listId - 1)
        // console.log(movedListId)
        console.log('current id:', listId)
        console.log("move id:", movedListId)
    }

    
    const handleMoveTask = (e) => {
        console.log(id, listId)

        fetch(`http://localhost:3000/lists/${movedListId}`)
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                    {name}
                    <Button style={{ marginLeft: '150px' }} onClick={() => handleDelete(id)}>🗑</Button>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Description: </Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <form onSubmit={handleMoveTask}>
                <Button onClick={handleLeftClick}>
                    ◀
                </Button>
                <Button onClick={handleRightClick}>
                    ▶
                </Button>
                </form>
            </Card.Body>
        </Card>
        // <Card.Group>
        //     <Card>
        //         <Card.Content>
        //             <Card.Header>
        //                 {name}
        //                 <Button>🗑</Button>
        //             </Card.Header>
        //             <Card.Description>
        //                 {description}
        //             </Card.Description>
        //         </Card.Content>
        //         <Card.Content extra>
        //             <div className='ui two buttons'>
        //                 <Button>
        //                     ◀
        //                 </Button>
        //                 <Button>
        //                     ▶
        //                 </Button>
        //             </div>                </Card.Content>
        //     </Card>
        // </Card.Group>
    )
}

export default Tasks;