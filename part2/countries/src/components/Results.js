import React, { useState } from "react";
import CountryDetails from "./CountryDetails";

const Results = ({ countries, searchQuery }) => {
    const [shownCountries, setShownCountries] = useState([]);

    const toggleCountryDetails = (cca3) => {
        if (shownCountries.includes(cca3)) {
            setShownCountries(shownCountries.filter((countryCca3) => countryCca3 !== cca3));
        } else {
            setShownCountries([...shownCountries, cca3]);
        }
    };

    const renderCountries = () => {
        return (
            <ul className="country-list">
                {countries.map((country) => (
                    <li key={country.cca3}>
                        {country.name.common}{" "}
                        <button onClick={() => toggleCountryDetails(country.cca3)}>
                            {shownCountries.includes(country.cca3) ? "Hide" : "Show"}
                        </button>
                        {shownCountries.includes(country.cca3) && (
                            <CountryDetails country={country} countryId={country.cca3} />
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            {searchQuery.length > 0 && renderCountries()}
        </div>
    );
};

export default Results;
