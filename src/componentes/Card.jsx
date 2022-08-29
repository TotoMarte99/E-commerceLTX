import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cartas (props){
    return(
        <div className="bg-color text-center">
            <div className="container-watches">   
            <Card className='cards'>
                <Card.Img variant="top" src={props.src}/>
                    <Card.Body>
                         <Card.Title>{props.Title}</Card.Title>
                            <Card.Text>
                                {props.Text}
                            </Card.Text>
                        <Button variant="warning">Click here</Button>
                    </Card.Body>
            </Card>
            </div>
        </div>
)
}

export default Cartas;