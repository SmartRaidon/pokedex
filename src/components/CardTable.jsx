import { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

function CardTable({sendPokemon}) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0); // used for disabling the next button in pagination
  const limit = 15;

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);

      try {
        const offset = (page - 1) * limit;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();
        setTotal(data.count);
        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemons(detailedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}}>
        { pokemons.length > 0 && pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} onClick={() => sendPokemon(pokemon)}/>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} total={total} limit={limit}/>
    </div>
  )
}

export default CardTable