import React from "react";

const CountryDetails = ({ country, countryId }) => {
    return (
        <div>
            <p>Flag: <img src={country.flags.png} alt={`Flag of ${country.name.common}`} /></p>
            <p>Name: {country.name.common}</p>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p>Languages: </p>
            <ul>
                {Object.values(country.languages).map((language, index) => (
                    <li key={`${countryId}-${index}`}>{language}</li>
                ))}
            </ul>
        </div>
    );
};

export default CountryDetails;
