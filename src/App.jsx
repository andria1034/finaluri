import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WordDetails from './components/WordDetails';
import Error from './components/Error';
import DarkModeToggle from './components/DarkModeToggle';
import './index.css';

function App() {
  const [word, setWord] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchWord = async (searchWord) => {
    if (!searchWord.trim()) {
      setError('Please enter a word');
      setData(null);
      return;
    }
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/<word>${searchWord}`);
      if (!response.ok) throw new Error('Word not found');
      const result = await response.json();
      setData(result[0]);
      setError('');
    } catch (err) {
      setError(err.message);
      setData(null);
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <SearchBar word={word} setWord={setWord} fetchWord={fetchWord} />
        {error && <Error message={error} />}
        {data && <WordDetails data={data} />}
      </div>
    </div>
  );
}

export default App;
