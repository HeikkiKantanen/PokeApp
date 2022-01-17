
import React, {useEffect, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

import axios from 'axios';

import './App.css';


const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => { const fetches = res.data.results.map((p) => 
        axios.get(p.url).then((res) => res.data)
      );
      Promise.all(fetches).then((data) => {
        setPokemons(data);
      });
    });
  }, []);

  console.log(pokemons);
  return (
    <div>
      <Navbar className="add-padding" expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">PokeApp</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
      <Row xs={2} md={4} lg={5} className="justify-content-betweem my-5 d-flex gap-3">
        {pokemons.map((p) => (
          <li>{p.name}</li>
        ))}
            <Card bg="dark" text="light">
              <Card.Img variant="top" src="https://www.worldatlas.com/r/w960-q80/upload/ea/3f/a4/shutterstock-497360188.jpg" />
                <Card.Body>
                  <Card.Title>
                    {pokemons}
                  </Card.Title>
                  <Card.Text>
                    My awesome text
                  </Card.Text>
                </Card.Body>  
            </Card>
      </Row>
      </Container>
    </div>
  );
};

export default App;
