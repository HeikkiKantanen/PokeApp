import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PokeCard from './PokeCard';
import Button from 'react-bootstrap/Button';

const FavList = ({favHandler, favourites}) => {
    return (
    <div>
    <Container>
    <Row 
      xs={2} 
      md={4} 
      lg={5} 
      className="justify-content-between
      my-5 d-flex gap-3"
    >
      {favourites.map((pokemon) => (
      <PokeCard 
        key={pokemon.name}
        name={pokemon.name}
        image={pokemon.sprites.
          other.dream_world.
          front_default}
          PokemonName={pokemon.name}
          fav={favourites.some((item) => item.name == pokemon.name)}
          favClick={() => favHandler(pokemon)}
      />
      ))}
    </Row>
    </Container>
    <Button variant="outline-primary" size="sm" m="">Clear my favorites</Button>
  </div>
    );
};
        


export default FavList;