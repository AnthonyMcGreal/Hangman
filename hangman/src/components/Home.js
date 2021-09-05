import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Home = ({ setCategory, category }) => {
  const [isCategory, setIsCategory] = useState(true);

  function setNewCategory(event) {
    let value = event.target.innerText;
    setCategory(value);
    setIsCategory(false);
  }

  const history = useHistory();

  let categoryLine;

  if (category === '_') {
    categoryLine = 'Pick a category';
  } else {
    categoryLine = 'Chosen category : ' + category;
  }

  return (
    <div id="home">
      <h1>Welcome to Hangman!!</h1>
      <p>{categoryLine}</p>
      <section id="cats">
        <button id="cat-button" onClick={(event) => setNewCategory(event)}>
          Countries
        </button>
        <button id="cat-button" onClick={(event) => setNewCategory(event)}>
          Rivers
        </button>
        <button id="cat-button" onClick={(event) => setNewCategory(event)}>
          Mountains
        </button>
        <button
          disabled={isCategory}
          id="playButton"
          onClick={() => history.push('/game')}
        >
          Start a game
        </button>
      </section>
    </div>
  );
};

export default Home;
