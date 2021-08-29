import { Link } from 'react-router-dom';
const Win = ({ reset }) => {
  return (
    <div>
      You Win
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

export default Win;
