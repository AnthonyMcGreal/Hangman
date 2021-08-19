import React from 'react';

const userInput = ({ userInput, setUserInput }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput);
    setUserInput((currentInput) => {
      console.log(event.target.value);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userGuess">
        Enter Letter
        <input
          id="userGuess"
          type="text"
          onChange={(event) => setUserInput(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default userInput;
