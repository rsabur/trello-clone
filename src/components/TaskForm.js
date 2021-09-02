import { Button } from "bootstrap";
import { useState } from "react";
import { Form } from "semantic-ui-react";

function TaskForm({ onAddTasks, id, task }) {
    const [setOpen] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleTicketSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name,
            description
        }

        fetch(`http://localhost:3000/lists/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(task => {
                console.log(task)
                onAddTasks(task)
                setName('')
                setDescription('')
            })
    }
    return (

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
            <Button
                content="Add"
                labelPosition='right'
                type='submit'
                onClick={() => setOpen(false)}
                positive
            />
        </Form>
    )
}

export default TaskForm;