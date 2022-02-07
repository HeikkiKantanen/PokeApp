
import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Loader from './Loader';
import PokeCard from './PokeCard';

// 1) Styling -> card background displays pokemon type
// 2) Single page pokemon card
// 3) Opportunity to favorite single pokemons with heart etc.

import axios from 'axios';

const Pokelist = ({ favHandler, favourites }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPokemons, setNextPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
    .get(nextPokemons)
    .catch(error => {
        console.log(error);
    }).then((res) => {
    const fetches = res.data.results.map((p) => 
      axios.get(p.url).then((res) => res.data)
    );
        console.log({pokemons})
    setNextPokemons(res.data.next);

    Promise.all(fetches).then((data) => {
      setPokemons((prevState) => [...prevState, ...data]);
    });
    setIsLoading(false);
  });
  };

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
        {isLoading && <Loader />}
        {!isLoading && 
        pokemons.map((pokemon) => (
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
      <Button variant="primary" size="lg" mt="5" onClick={getPokemons}>Load more</Button>
    </div>
  );
};

export default Pokelist;
