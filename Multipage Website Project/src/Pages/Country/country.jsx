import { getCountryData } from "@/Services/api/postAPI";
import { CountryCard } from "@/Components/UI/Cards/countryCard";
import { SearchFilter } from "@/Components/UI/SearchFilter/searchFilter";
import { useEffect, useState, useTransition } from "react";

export const CountryPage = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  if (isPending)
    return (
      <div className="loaderContainer">
        <div className="loader"></div>
      </div>
    );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four--cols">
        {filteredCountries.map((currCountry, ind) => {
          return <CountryCard key={ind} country={currCountry} />;
        })}
      </ul>
    </section>
  );
};
