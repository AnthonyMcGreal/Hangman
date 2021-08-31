const GuessedLetters = (rejectedLetters) => {
  return (
    <div id="guessedLetters">
      <p>Letters you have tried:[{rejectedLetters.rejectedLetters}]</p>
    </div>
  );
};

export default GuessedLetters;
