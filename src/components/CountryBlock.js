import React from 'react';
import CountriesAll from '../countriesAll.json';

function CountryBlock() {
  return (
    <div className='allBlocks'>
      {CountriesAll.map((e) => {
        return (
          <div key={e.cioc} className='countryBlock'>
            <img src={e.flag} alt='This is a flag'/>
            <div className='countryInfo'>
            <h3>{e.name}</h3>
            <p>Population: <span className='dataRes'>{e.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
            <p>Region: <span className='dataRes'>{e.region}</span></p>
            <p>Capital: <span className='dataRes'>{e.capital}</span></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountryBlock;
