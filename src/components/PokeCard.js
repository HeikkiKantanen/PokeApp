import React from 'react';
import Card from 'react-bootstrap/Card';


const PokeCard = ({name, image}) => {
    return (
        <Card bg="dark" text="light" key={name}>
            <Card.Header>{name.slice(0,1).toUpperCase()+name.slice(1, name.length)}</Card.Header>
                <Card.Body>
                    <Card.Img variant="top" 
                        src={image} />
                </Card.Body>  
        </Card>
    );
};

export default PokeCard;