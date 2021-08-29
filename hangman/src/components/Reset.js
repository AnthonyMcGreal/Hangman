import { Link } from 'react-router-dom';

const Reset = ({ reset }) => {
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
