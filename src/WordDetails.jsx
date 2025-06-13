import React from 'react';

function WordDetails({ data }) {
  const playAudio = () => {
    const audioUrl = data.phonetics.find(p => p.audio)?.audio;
    if (audioUrl) {
      new Audio(audioUrl).play();
    }
  };

  return (
    <div className="word-details">
      <div className="header">
        <h2>{data.word}</h2>
        <button onClick={playAudio}>🔊</button>
      </div>
      {data.phonetic && <p className="phonetic">{data.phonetic}</p>}

      {data.meanings.map((meaning, idx) => (
        <div key={idx} className="meaning">
          <h3>{meaning.partOfSpeech}</h3>
          <ul>
            {meaning.definitions.map((def, i) => (
              <li key={i}>{def.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default WordDetails;
