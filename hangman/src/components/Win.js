import { useHistory } from 'react-router-dom';
const Win = ({ reset }) => {
  const history = useHistory();

  function resetAndRedirect() {
    reset();
    history.push('/');
  }

  return (
    <div id="win">
      <p>You Win </p>
      <p>Congratulations</p>
      <div id="reset">
        <button onClick={() => resetAndRedirect()}>Play a new game</button>
      </div>
    </div>
  );
};

export default Win;
