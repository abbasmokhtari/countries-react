import React from 'react';
import './App.css';
import Header from './components/Header'
import CountryBlock from './components/CountryBlock'
import CountriesAll from './countriesAll.json';
import SearchBar from './components/SearchBar';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <CountryBlock allCountries={CountriesAll}/>
    </div>
  );
}

export default App;
