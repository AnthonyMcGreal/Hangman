const GuessedLetters = (rejectedLetters) => {
  return (
    <div id="guessedLetters">
      <p>Letters you have tried: </p>
      <p>[{rejectedLetters.rejectedLetters}]</p>
    </div>
  );
};

export default GuessedLetters;
