import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList.js";

function App() {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const [pokemon, setPokemon] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const filter = search => {
    if (search === "") {
      return pokemon;
    } else {
      let result = pokemon.filter(poke =>
        poke.name.includes(search.toLowerCase())
      );
      return result;
    }
  };

  React.useEffect(() => {
    fetch(API)
      .then(data => data.json())
      .then(data => setPokemon(data.results));
  }, []);
  return (
    <div className="App">
      <input onChange={e => handleChange(e)} />
      <PokemonList pokemon={filter(search)} />
    </div>
  );
}
export default App;
