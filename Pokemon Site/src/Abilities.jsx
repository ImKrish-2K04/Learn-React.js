export const PokemonAbilities = ({ statName, statValue }) => {
  return (
    <p className="skills">
      <span className="skill-label">{statName.toUpperCase()}</span>
      <span className="skill_points">{statValue}</span>
    </p>
  );
};
