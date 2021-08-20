import React from 'react';

const Word = ({
  guessedLetters,
  wordInUse,
  setWordInUse,
  setGuessedLetters,
}) => {
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
  }
  return (
    <div>
      <p>{displayedWord}</p>
      <button
        onClick={() => {
          setWordInUse((currentWord) => {
            const randomNum = Math.floor(Math.random() * 5);
            return hiddenWords[randomNum];
          });
        }}
      >
        Generate Word
      </button>
    </div>
  );
};

export default Word;

const hiddenWords = ['northcoders', 'function', 'react', 'express', 'babel'];
