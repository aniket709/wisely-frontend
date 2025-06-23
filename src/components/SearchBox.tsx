import { useState, type KeyboardEvent } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState<string>('');

  const handleSearch = () => {
    if (input.trim()) onSearch(input);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center justify-center w-full max-w-md mt-20 sm:mt-32">
      <input
        type="text"
        placeholder="Type a country..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        className="p-3 rounded bg-slate-800 text-white border border-slate-600 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        onClick={handleSearch}
        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-white rounded w-full sm:w-auto"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;