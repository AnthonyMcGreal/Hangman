import { Link } from 'react-router-dom';

const Reset = ({ reset }) => {
  return (
    <div id="reset">
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
