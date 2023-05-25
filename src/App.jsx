import react, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card/Card';
import Search from './components/Search/Search';

function App() {
  const [country, setContry] = useState(null);
  const [nameCountry, setNameCountry] = useState('');

  const countryData = async (cou) => {
    setNameCountry(cou);
    // console.log(cou);
    const url = `https://restcountries.com/v3.1/name/${cou}`;
    if (cou) {
      try {
        const res = await axios.get(url);
        setContry(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    countryData();
  }, [nameCountry]);
  return (
    <div className="overflow-hidden">
      <h1 className="mx-auto text-center text-4xl w-screen text-white bg-slate-900 py-4 uppercase mb-10 items-center">
        Country Information
      </h1>
      <Search newCountry={countryData}></Search>
      <Card country={country}></Card>
    </div>
  );
}

export default App;
