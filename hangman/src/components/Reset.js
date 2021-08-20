const Reset = () => {
  return (
    <div>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Play a new game
      </button>
    </div>
  );
};

export default Reset;
