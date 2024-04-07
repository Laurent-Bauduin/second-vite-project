import { useState } from "react";
import PokemonCard from "./components/PokemonCard.jsx";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  let [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPrevious = () => {
    setPokemonIndex((pokemonIndex -= 1));
    console.log(pokemonIndex);
  };

  const handleClickNext = () => {
    setPokemonIndex((pokemonIndex += 1));
    console.log(pokemonIndex);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
      <button onClick={handleClickPrevious}>Précédent</button>
      <button onClick={handleClickNext}>Suivant</button>
    </div>
  );
}

export default App;
