import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import CountryService from './services/CountryService';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    CountryService.getAll()
      .then(response => {
        setCountries(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <SearchForm onSearch={handleSearch} searchQuery={searchQuery} />
      <Results countries={filteredCountries} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
