import PropTypes from "prop-types";

function NavBar({ pokemonList, setPokemonIndex }) {
  return (
    <>
      {pokemonList.map((element, index) => (
        <button key={element.name} onClick={() => setPokemonIndex(index)}>
          {element.name}
        </button>
      ))}
    </>
  );
}

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
