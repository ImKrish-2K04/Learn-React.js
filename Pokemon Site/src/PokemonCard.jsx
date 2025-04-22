import { PokemonAbilities } from "./Abilities";

export const PokemonCard = ({ pokemonData }) => {
  if (!pokemonData) return null;

  const { name, height, weight, sprites, types, stats } = pokemonData;

  const getTypeClass = (type) => `type-${type}`;

  return (
    <section className="card">
      <figure>
        <img
          src={
            sprites?.other?.dream_world?.front_default || sprites?.front_default
          }
          alt={name ? `${name} image` : "Pokemon image"}
          width="100px"
          height="100px"
          loading="lazy"
        />
      </figure>

      <div className="pokemonDetails">
        <div className="pokemon_name">{name}</div>

        <div className={`pokemon_type ${getTypeClass(types?.[0]?.type?.name)}`}>
          {types?.map((t) => t?.type?.name).join(", ")}
        </div>

        <div className="pokemon_stats">
          {stats?.map((stat, i) => {
            if ([0, 1, 2, 5].includes(i)) {
              return (
                <PokemonAbilities
                  key={stat?.stat?.name || i}
                  statName={stat?.stat?.name}
                  statValue={stat?.base_stat}
                />
              );
            } else if (i === 3) {
              return (
                <PokemonAbilities
                  key="height"
                  statName="height"
                  statValue={height}
                />
              );
            } else {
              return (
                <PokemonAbilities
                  key="weight"
                  statName="weight"
                  statValue={weight}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};
