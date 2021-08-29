import './App.css';
import HangmanPic from './components/hangman-pic';
import Title from './components/Title';
import UserInput from './components/userInput';
import Word from './components/word';
import Reset from './components/Reset';
import GuessedLetters from './components/GuessedLetters';
import Home from './components/Home';
import Win from './components/Win';
import Lose from './components/Lose';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [hangmanCounter, setHangmanCounter] = useState(0);
  const [wordInUse, setWordInUse] = useState('_');
  const [rejectedLetters, setRejectedLetters] = useState([]);
  const [category, setCategory] = useState('_');

  function reset() {
    setGuessedLetters([]);
    setHangmanCounter(0);
    setRejectedLetters([]);
    setWordInUse('_');
  }

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Home setCategory={setCategory} category={category} />
          </Route>
          <Route exact path="/game">
            <Title />
            <Word
              guessedLetters={guessedLetters}
              wordInUse={wordInUse}
              setWordInUse={setWordInUse}
              setGuessedLetters={setGuessedLetters}
              category={category}
              setRejectedLetters={setRejectedLetters}
              setHangmanCounter={setHangmanCounter}
            />
            <HangmanPic hangmanCounter={hangmanCounter} />
            <UserInput
              setGuessedLetters={setGuessedLetters}
              wordInUse={wordInUse}
              setHangmanCounter={setHangmanCounter}
              setRejectedLetters={setRejectedLetters}
              rejectedLetters={rejectedLetters}
            />
            <GuessedLetters rejectedLetters={rejectedLetters} />
            <br></br>
            <Reset
              setGuessedLetters={setGuessedLetters}
              setHangmanCounter={setHangmanCounter}
              setRejectedLetters={setRejectedLetters}
              setWordInUse={setWordInUse}
              reset={reset}
            />
          </Route>
          <Route exact path="/win">
            <Win reset={reset} />
          </Route>
          <Route exact path="/lose">
            <Lose reset={reset} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
