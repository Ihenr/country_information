import React, { useState } from 'react';
import './Search.css';

const Search = ({ newCountry }) => {
  const [country, setCountry] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (country === '' || !country) return alert('Enter a country name');
    newCountry(country);
    var input = document.getElementById('countryName');

    // Clear the input value
    input.value = '';
  };

  return (
    <div className="serarch flex  py-3 mx-auto">
      <form className="w-full flex" onSubmit={onSubmit}>
        <input
          id="countryName"
          type="text"
          placeholder="Enter Country Name"
          className="w-4/5 px-4 py-3 rounded-l-lg border-none outline-none"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        ></input>
        <button
          type="submit"
          className="flex text-white bg-green-800  px-3 py-3 rounded-r-lg uppercase justify-center hover:bg-green-600 hover:text-black hover:font-bold"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
