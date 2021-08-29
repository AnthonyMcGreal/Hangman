const GuessedLetters = (rejectedLetters) => {
  return (
    <div>
      <p>Letters you have tried:[{rejectedLetters.rejectedLetters}]</p>
    </div>
  );
};

export default GuessedLetters;
