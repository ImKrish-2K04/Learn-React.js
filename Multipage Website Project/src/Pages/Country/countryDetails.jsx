import { getSpecificCountryDetails } from "@/Services/api/postAPI";
import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";

export const CountryDetails = () => {
  const [isPending, startTransition] = useTransition();
  const [countryDetails, setCountryDetails] = useState(null);
  const params = useParams();

  useEffect(() => {
    startTransition(async () => {
      const res = await getSpecificCountryDetails(params.id);
      setCountryDetails(res.data[0]);
    });
  }, [params.id]);

  if (isPending || !countryDetails) {
    return (
      <div className="loaderContainer">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two--cols">
          <img
            src={countryDetails?.flags?.svg}
            alt={countryDetails?.flags?.alt || "Flag"}
            className="flag"
          />
          <div className="country-content">
            <p className="card-title">{countryDetails?.name?.official}</p>
            <div className="infoContainer">
              <p>
                <span className="card-description">Native Names:</span>
                {countryDetails?.name?.nativeName
                  ? Object.keys(countryDetails.name.nativeName)
                      .map((key) => countryDetails.name.nativeName[key].common)
                      .join(", ")
                  : "N/A"}
              </p>
              <p>
                <span className="card-description">Population:</span>
                {countryDetails?.population.toLocaleString() || "N/A"}
              </p>
              <p>
                <span className="card-description">Region:</span>
                {countryDetails?.region || "N/A"}
              </p>
              <p>
                <span className="card-description">Sub Region:</span>
                {countryDetails?.subregion || "N/A"}
              </p>
              <p>
                <span className="card-description">Capital:</span>
                {countryDetails?.capital?.join(", ") || "N/A"}
              </p>
              <p>
                <span className="card-description">Top level Domain:</span>
                {countryDetails?.tld || "N/A"}
              </p>
              <p>
                <span className="card-description">Currency:</span>
                {countryDetails?.currencies
                  ? Object.keys(countryDetails.currencies).map(
                      (cur) => countryDetails.currencies[cur].name
                    )
                  : "N/A"}
              </p>
              <p>
                <span className="card-description">Language:</span>
                {countryDetails?.languages
                  ? Object.values(countryDetails.languages).join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="country-card-backBtn">
          <NavLink to="/country">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
