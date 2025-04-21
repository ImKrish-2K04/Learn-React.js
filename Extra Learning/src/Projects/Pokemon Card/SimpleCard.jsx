import { useEffect, useState } from "react";
import "./SimpleCard.css";

export const SimpleCard = () => {
  const [pokemon, setPokemon] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon/charmander";

  const getPokemonData = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return (
    <>
      <header>
        <h1>Let's catch pokemon</h1>
      </header>
      <section className="container">
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={pokemon && pokemon.sprites.other.dream_world.front_default}
                alt="pikachu image"
                width={`100px`}
                height={`100px`}
              />
            </figure>
            <h2>{pokemon && pokemon.name}</h2>
          </li>
        </ul>
      </section>
    </>
  );
};
