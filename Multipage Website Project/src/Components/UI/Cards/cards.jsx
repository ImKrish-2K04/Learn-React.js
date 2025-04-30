export const Card = ({ currCard }) => {
  const { country_name, capital, population, interesting_fact } = currCard;

  return (
    <div className="card">
      <div className="container-card bg-blue-box">
        <p className="card-title">{country_name}</p>
        <p>
          <span className="card-description">Capital:</span>
          {capital}
        </p>
        <p>
          <span className="card-description">Population:</span>
          {population}
        </p>
        <p>
          <span className="card-description">Interesting facts:</span>
          {interesting_fact}
        </p>
      </div>
    </div>
  );
};
