import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';

const Word = ({
  guessedLetters,
  wordInUse,
  setWordInUse,
  category,
  setRejectedLetters,
  setGuessedLetters,
  setHangmanCounter,
}) => {
  useEffect(() => {
    if (wordInUse === '_' && category !== '_') {
      setWordInUse(() => {
        const randomNum = Math.floor(
          Math.random() * hiddenWords[category].length
        );
        return hiddenWords[category][randomNum];
      });
    }
  }, [category, setWordInUse, wordInUse]);

  if (wordInUse === undefined) {
    return <Redirect to="/home" />;
  }

  let displayedWord = wordInUse
    .split('')
    .map((letter) => {
      if (guessedLetters.includes(letter)) {
        return letter;
      } else {
        return '_';
      }
    })
    .join(' ');
  if (!displayedWord.includes('_')) {
    displayedWord = 'You Win!!';
    return <Redirect to="/win" />;
  }

  if (hiddenWords[category] === undefined) return <Redirect to="/" />;
  return (
    <div id="word">
      <p id="hiddenWord">{displayedWord}</p>
      <p>Chosen category:{category}</p>
      <button
        onClick={() => {
          setWordInUse(() => {
            const randomNum = Math.floor(
              Math.random() * hiddenWords[category].length
            );
            return hiddenWords[category][randomNum];
          });
          setGuessedLetters([]);
          setRejectedLetters([]);
          setHangmanCounter(0);
        }}
      >
        Generate a new word
      </button>
    </div>
  );
};

export default Word;

const hiddenWords = {
  Mountains: [
    'everest',
    'elbrus',
    'kilimanjaro',
    'blanc',
    'aconcagua',
    'vesuvius',
  ],
  Rivers: [
    'thames',
    'nile',
    'amazon',
    'mississippi',
    'yangtze',
    'volga',
    'danube',
    'ganges',
    'rhine',
    'indus',
  ],
  Countries: [
    'england',
    'russia',
    'india',
    'china',
    'peru',
    'italy',
    'lithuania',
    'tanzania',
    'greece',
    'mexico',
  ],
};
