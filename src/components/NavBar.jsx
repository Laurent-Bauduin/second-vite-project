import PropTypes from "prop-types";

function NavBar({ pokemonList }) {
  return (
    <>
      {pokemonList.map((element) => (
        <button key={element.name}>{element.name}</button>
      ))}
    </>
  );
}

export default NavBar;
