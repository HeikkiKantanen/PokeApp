
import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Loader from './Loader';
import PokeCard from './PokeCard';

import axios from 'axios';

// import 'App.css';


const Pokelist = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => { const fetches = res.data.results.map((p) => 
        axios.get(p.url).then((res) => res.data)
      );
      Promise.all(fetches).then((data) => {
        setPokemons(data);
        setIsLoading(false);
      });
    });
  }, []);

  console.log(pokemons);
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
        />
        ))}
      </Row>
      </Container>
    </div>
  );
};

export default Pokelist;
