import { Link } from 'react-router-dom';

const Home = ({ setCategory }) => {
  function setNewCategory(event) {
    let value = event.target.innerText;
    setCategory(value);
  }
  return (
    <div>
      <h1>Welcome to Hangman!!</h1>
      <p>Pick a category</p>
      <button onClick={(event) => setNewCategory(event)}>Countries</button>
      <button onClick={(event) => setNewCategory(event)}>Rivers</button>
      <button onClick={(event) => setNewCategory(event)}>Mountains</button>
      <Link to="/game">
        <p>Start a game</p>
      </Link>
    </div>
  );
};

export default Home;
