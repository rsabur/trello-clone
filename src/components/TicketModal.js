import { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";

function TicketModal({ onAddTasks }) {
    const [newCard, setNewCard] = useState()
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleTicketSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name,
            description
        }

        fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(task => {
                console.log(task)
                onAddTasks(task)
                setName('')
                setDescription('')
            })
    }
    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button className='new-ticket-button' >New Ticket</Button>}
        >
            <Modal.Header>Create a New Ticket!</Modal.Header>
            <Modal.Description>
                <Form onSubmit={handleTicketSubmit}>
                    <Form.Group>
                        <Form.Input
                            fluid
                            value={name}
                            name='name'
                            id='form-input-ticket-name'
                            placeholder='Name'
                            onChange={(e) => setName(e.target.value)}>
                        </Form.Input>
                        <Form.TextArea
                            value={description}
                            name='description'
                            id='form-input-ticket-description'
                            placeholder='Description'
                            onChange={(e) => setDescription(e.target.value)}>
                        </Form.TextArea>
                    </Form.Group>
                </Form>
            </Modal.Description>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button
                    content="Add"
                    labelPosition='right'
                    type='submit'
                    onClick={() => setOpen(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default TicketModal;