import { Button } from "react-bootstrap";
import { Card } from "semantic-ui-react";

function Tickets({ name, description }) {



    return (
        <Card.Group>
            <Card>
                <Card.Content>
                    <Card.Header>
                        {name}
                        <Button>🗑</Button>
                    </Card.Header>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button variant="secondary" >
                            ◀
                        </Button>
                        <Button variant="secondary" >
                            ▶
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </Card.Group>
    )
}

export default Tickets;