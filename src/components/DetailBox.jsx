function DetailBox({receivedPokemon}) {
  if (!receivedPokemon) {
    return (
      <div>
        <h2>Detail Window</h2>
        <p>Select a Pokémon to see details here.</p>
      </div>
    )
  }
  return (
    <div>
      <h3>{receivedPokemon.name.charAt(0).toUpperCase() + receivedPokemon.name.slice(1)}</h3>
      <img src={receivedPokemon?.sprites.front_default} alt={receivedPokemon.name} style={{minHeight:"300px"}}/>
      <p>ID: {receivedPokemon.id}</p>
      <p>Height: {receivedPokemon.height}</p>
      <p>Weight: {receivedPokemon.weight}</p>
      <p>Type: {receivedPokemon.types.map((type) => type.type.name).join(", ")}</p>
      <p>Abilities: {receivedPokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
      <p>Stats: {receivedPokemon.stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join(", ")}</p>
    </div>
  )
}

export default DetailBox