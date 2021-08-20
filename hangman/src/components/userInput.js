import React from 'react';
import { useState } from 'react';

const UserInput = ({ setGuessedLetters, wordInUse, setHangmanCounter }) => {
  const [currentLetter, setCurrentLetter] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setGuessedLetters((currentArray) => {
      const newArray = [...currentArray];
      newArray.push(currentLetter);
      return newArray;
    });
    if (!wordInUse.includes(currentLetter)) {
      setHangmanCounter((currentCounter) => {
        let newCounter = currentCounter;
        newCounter++;
        return newCounter;
      });
    }
    setCurrentLetter('');
  };
  return (
    <form onSubmit={handleSubmit} id="guessInput">
      <label htmlFor="userGuess">
        Enter Letter
        <input
          id="userGuess"
          type="text"
          required
          maxLength="1"
          value={currentLetter}
          onChange={(event) => {
            setCurrentLetter(event.target.value.toLowerCase());
          }}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInput;
