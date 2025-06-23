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
  
  interface Props {
    data: CountryData;
  }
  
  const CountryCard: React.FC<Props> = ({ data }) => {
    return (
      <div className="bg-slate-800 p-4 sm:p-6 rounded-2xl shadow-xl max-w-full sm:max-w-md w-full mx-auto mt-6 sm:mt-10 border border-slate-700 animate-card">
        <div className="flex flex-col items-center">
          <img
            src={data.flag}
            alt={`${data.name} flag`}
            className="w-32 sm:w-40 rounded-lg shadow-md"
          />
          <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-white">{data.name} 🌍</h2>
        </div>
        <ul className="mt-4 sm:mt-6 space-y-2 text-slate-300 text-sm sm:text-base">
          <li>
            <span className="font-semibold">📍 Capital:</span> {data.capital}
          </li>
          <li>
            <span className="font-semibold">🌐 Region:</span> {data.region}
          </li>
          <li>
            <span className="font-semibold">👥 Population:</span> {data.population.toLocaleString()}
          </li>
          <li>
            <span className="font-semibold">💱 Currency:</span> {data.currency}
          </li>
          <li>
            <span className="font-semibold">🗣️ Languages:</span> {data.languages}
          </li>
          <li>
            <span className="font-semibold">⏰ Timezone:</span> {data.timezone}
          </li>
        </ul>
      </div>
    );
  };
  
  export default CountryCard;