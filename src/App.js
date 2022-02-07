import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PokeList from "./components/PokeList";
import PokeSingle from "./components/PokeSingle";
import Layout from "./components/Layout";
import Home from "./components/Home";
import FavList from "./components/FavList";
import "./App.css";


const App = () => {
  const [favourites, setFavourites] = useState([]);

  const getArray = JSON.parse(localStorage.getItem('favourites') || '0');

  useEffect(() => {
    if(getArray != 0) {
      setFavourites(getArray);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);
  
  const favHandler = (pokemon) => {
  let item = favourites.some((item) => item.id == pokemon.id);

  if(!item) {
    setFavourites((prevState) => [...prevState, pokemon]);
    // localStorage.setItem(pokemon.name, JSON.stringify(pokemon))
  } else {
    const newArray = [...favourites];
    newArray.splice(
      newArray.findIndex((item) => item.id === pokemon.id),
    1
    );
    setFavourites(newArray);
    // localStorage.removeItem(pokemon.name);
  }
  console.log("wow");
  console.log(favourites);
};
    
  
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route 
            path="Pokelist" 
            element={<PokeList favHandler={favHandler} favourites={favourites} />}
          />
          <Route 
            path="/FavList" 
            element={
            <FavList favHandler={favHandler} favourites=
            {favourites} />
            } 
          />
          <Route path="/:PokemonName" element={<PokeSingle />} 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
