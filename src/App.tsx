import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import SearchBox from './components/SearchBox';
import CountryCard from './components/CountryCard';
import Loader from './components/Loader';

interface CountryData {
  name: string;
  capital: string;
  region: string;
  population: number;
  currency: string;
  languages: string;
  timezone: string;
  flag: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchCountry = async (name: string): Promise<void> => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get<CountryData>(`http://localhost:3000/api/v1/${name}`);
      setData(res.data);
    } catch (err) {
      setError('❌ Country not found.');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 tracking-tight">🧠 Wiser</h1>
      <p className="text-center text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">
        Explore any country in seconds.
      </p>
      <SearchBox onSearch={fetchCountry} />
      {loading && <Loader />}
      {error && <p className="text-center text-red-400 mt-6 text-sm sm:text-base">{error}</p>}
      {data && <CountryCard data={data} />}
    </div>
  );
};

export default App;