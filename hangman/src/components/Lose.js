import { useHistory } from 'react-router-dom';

const Lose = ({ reset, wordInUse, category }) => {
  const history = useHistory();

  function resetAndRedirect() {
    reset();
    history.push('/');
  }
  return (
    <div id="lose">
      <p>You killed him!!</p>
      <p>
        The {word[category]}
        {wordInUse[0].toUpperCase() + wordInUse.slice(1)}
      </p>
      <div id="reset">
        <button onClick={() => resetAndRedirect()}>Play a new game</button>
      </div>
    </div>
  );
};

export default Lose;

const word = {
  Countries: 'country was ',
  Rivers: 'river was the river ',
  Mountains: 'mountain was Mt. ',
};
