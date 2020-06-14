import React, { useState } from 'react';

function SearchBar() {
  const [keyword, setKeyword] = useState('');

  const onChange = (e) => setKeyword(e.target.value);

//   const filteredData = babyNameData.filter((e) =>
//     e.name.toLowerCase().includes(keyword.toLowerCase())
//   );

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
    </div>
  );
}

export default SearchBar;
