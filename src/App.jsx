import React, { useState } from 'react';
import fetchData from './services/api';
import Card from './components/Card';
import initialData from './halpers/initialData';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
        <input type="text" placeholder="Cidade" className="bg-[#343746] text-slate-400 p-3 rounded-lg outline-none w-full flex-1 sm:max-w-[300px]" value={city} onChange={({ target: { value } }) => setCity(value)} />
        <button type="submit" className="bg-[#353846] p-3 rounded-lg ml-3 text-white font-bold">Buscar</button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
