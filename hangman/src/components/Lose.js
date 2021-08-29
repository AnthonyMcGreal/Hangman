import { Link } from 'react-router-dom';

const Lose = ({ reset }) => {
  return (
    <div>
      You Lose!!
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
