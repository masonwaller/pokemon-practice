import React from "react";

function PokemonList(props) {
  return (
    <ul>
      {props.pokemon.map(poke => (
        <li key={poke.name}>
          {poke.name} <a href={poke.url}>URL</a>
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;
