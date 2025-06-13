import React from 'react';

function SearchBar({ word, setWord, fetchWord }) {
  const handleSearch = () => {
    fetchWord(word);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for a word"
      />
      <button onClick={handleSearch}>🔍</button>
    </div>
  );
}

export default SearchBar;
