import React from 'react';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { LinkContainer } from "react-router-bootstrap";

import { Heart, HeartFill } from 'react-bootstrap-icons';



const PokeCard = ({name, image, PokemonName, type, fav, favClick}) => {

    return (
        <Card className={type} bg="dark" text="light" key={name}>
            <Card.Header className="d-flex justify-content-between">
                {name.slice(0,1).toUpperCase()+name.slice(1, name.length)}
                {fav ? (
                    <HeartFill onClick={favClick} size="30" color="red" />
                ) : (
                    <Heart onClick={favClick} size="30" color="white" />
                )}
            </Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={image} />
                    <LinkContainer to={`/${PokemonName}`}>
                        <Button variant="outline-primary" size="sm">Details</Button>
                    </LinkContainer>
                </Card.Body>  
        </Card>
    );
};

export default PokeCard;