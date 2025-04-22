import "./Style.css";
import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";

export const PokemonSite = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();

      const detailedPokemonData = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        return data;
      });

      const pokemonData = await Promise.all(detailedPokemonData);
      setPokemon(pokemonData);
      setLoading(false);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to fetch Pokémon data. Try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchedPokemons = pokemon.filter((currPokemon) =>
    currPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="loadingState">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="errorState">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Let's Catch Pokémon!</h1>
      </div>

      <div className="search-bar">
        <input
          type="text"
          name="pokemon_name"
          className="pokemonName"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Pokémon..."
          autoFocus
        />
      </div>

      <div className="card-container">
        {searchedPokemons.length > 0 ? (
          searchedPokemons.map((pokemonData) => (
            <PokemonCard key={pokemonData.id} pokemonData={pokemonData} />
          ))
        ) : (
          <p className="no-results">No Pokémon found.</p>
        )}
      </div>
    </div>
  );
};
