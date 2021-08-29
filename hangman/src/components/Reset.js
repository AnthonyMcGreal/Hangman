import { Link } from 'react-router-dom';

const Reset = ({
  setGuessedLetters,
  setHangmanCounter,
  setRejectedLetters,
  setWordInUse,
}) => {
  function reset() {
    console.log('reset here');
    setGuessedLetters([]);
    setHangmanCounter(0);
    setRejectedLetters([]);
    setWordInUse('_');
  }

  return (
    <div>
      <Link
        to="/"
        onClick={() => {
          reset();
        }}
      >
        <p>Play a new game</p>
      </Link>
    </div>
  );
};

export default Reset;
