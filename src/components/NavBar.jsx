import PropTypes from "prop-types";

function NavBar({ sizePokemonList, pokemonIndex, setPokemonIndex }) {
  return (
    <>
      {pokemonIndex > 0 && (
        <button onClick={() => setPokemonIndex(pokemonIndex - 1)}>
          Précédent
        </button>
      )}
      {pokemonIndex < sizePokemonList - 1 && (
        <button onClick={() => setPokemonIndex(pokemonIndex + 1)}>
          Suivant
        </button>
      )}
    </>
  );
}

NavBar.propTypes = {
  sizePokemonList: PropTypes.number.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
};

export default NavBar;
