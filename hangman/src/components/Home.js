import { useHistory } from 'react-router-dom';

const Home = ({ setCategory, category }) => {
  function setNewCategory(event) {
    let value = event.target.innerText;
    setCategory(value);
  }

  const history = useHistory();

  let categoryLine;

  if (category === '_') {
    categoryLine = 'Pick a category';
  } else {
    categoryLine = 'Chosen category:' + category;
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
        <button id="playButton" onClick={() => history.push('/game')}>
          Start a game
        </button>
      </section>
    </div>
  );
};

export default Home;
