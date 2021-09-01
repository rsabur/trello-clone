import { Button, Card } from "react-bootstrap";
// import { Card } from "semantic-ui-react";

function Tasks({ id, name, description, onDeleteTask }) {

    const handleDelete = (id) => {
        console.log(id)
        // fetch(`http://localhost:3000/tasks/${id}`, {
        //     method: 'DELETE'
        // })
        onDeleteTask(id)
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                    {name} 
                    <Button style={{marginLeft: '150px'}} onClick={() => handleDelete(id)}>🗑</Button>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Description: </Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button>
                    ◀
                </Button>
                <Button>
                    ▶
                </Button>
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