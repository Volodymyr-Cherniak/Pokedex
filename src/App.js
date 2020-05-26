import React from 'react';
import NavBar from "./components/navBar";
import PokemonList from "./components/PokedexList";

function App() {
  return (
    <div className="container App">
      <NavBar/>
      <PokemonList/>
    </div>
  );
}

export default App;
