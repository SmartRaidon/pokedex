function Card({ pokemon, onClick }) {
  const typeColors = {
    grass: "#78C850",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    bug: "#A8B820",
    normal: "#A8A878",
    poison: "#A040A0",
    ground: "#E0C068",
    fairy: "#EE99AC",
    fighting: "#C03028",
    psychic: "#F85888",
    rock: "#B8A038",
    ghost: "#705898",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    flying: "#A890F0"
  };
  const mainType = pokemon?.types?.[0].type?.name;
  const backgroundColor = typeColors[mainType] || "#ccc";

  return (
    <div
      className="pokemon-card"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      <h3>#{pokemon?.id} {pokemon?.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <img src={pokemon?.sprites.front_default} alt={pokemon.name}/> 
    </div>
  )
}

export default Card