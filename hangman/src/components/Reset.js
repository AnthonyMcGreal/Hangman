import { useHistory } from 'react-router-dom';

const Reset = ({ reset }) => {
  const history = useHistory();

  function resetAndRedirect() {
    reset();
    history.push('/');
  }

  return (
    <div id="reset">
      <button onClick={() => resetAndRedirect()}>Play a new game</button>
    </div>
  );
};

export default Reset;
