import React, { useState } from 'react';
import CountryBlock from './CountryBlock';
import CountriesAll from '../countriesAll.json';

function SearchBar() {
  const [keyword, setKeyword] = useState('');

  const onChange = (e) => setKeyword(e.target.value);

  const filteredData = CountriesAll.filter(
    (e) =>
      e.name.toLowerCase().includes(keyword.toLowerCase()) ||
      e.capital.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='  Seach region or captital ...'
          name='keyword'
          value={keyword}
          onChange={onChange}
          className='input'
        />
      </form>
      <CountryBlock allCountries={filteredData} />
    </div>
  );
}

export default SearchBar;
