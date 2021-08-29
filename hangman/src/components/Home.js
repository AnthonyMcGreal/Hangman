import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Hangman!!</h1>
      <p>Pick a category</p>
      <Link to="/game">
        <p>Start a game</p>
      </Link>
    </div>
  );
};

export default Home;
