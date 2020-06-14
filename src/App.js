import React from 'react';
import './App.css';
import Header from './components/Header'
import CountryBlock from './components/CountryBlock'
import CountriesAll from './countriesAll.json';


function App() {
  return (
    <div className="App">
      <Header />
      <CountryBlock allCountries={CountriesAll}/>
    </div>
  );
}

export default App;
