import { Link } from 'react-router-dom';

const Lose = ({ reset, wordInUse, category }) => {
  return (
    <div>
      You Lose!! <br></br>The {word[category]} was {wordInUse}
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

export default Lose;

const word = {
  Countries: 'country',
  Rivers: 'river',
  Mountains: 'mountain',
};
