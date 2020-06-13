import React from 'react';
import CountriesAll from '../countriesAll.json';

function CountryBlock() {
  return (
    <div className='countryBlock'>
      {CountriesAll.map((e) => {
        return (
          <div key={e.cioc}>
            <img src={e.flag} alt='This is a flag'/>
            <h3>{e.name}</h3>
            <p>Population: {e.population}</p>
            <p>Region: {e.region}</p>
            <p>Capital: {e.capital}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CountryBlock;
