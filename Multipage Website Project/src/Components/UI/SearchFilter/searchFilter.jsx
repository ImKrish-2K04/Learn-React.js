export const SearchFilter = (props) => {
  const { search, setSearch, filter, setFilter, countries, setCountries } =
    props;

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleRegionChange = (e) => {
    setFilter(e.target.value);
  };

  const sortCountries = (order) => {
    const sortedCountryList = [...countries].sort((a, b) => {
      return order === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });

    setCountries(sortedCountryList);
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleInputChange}
      />

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("desc")}>Desc</button>
      </div>

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleRegionChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
