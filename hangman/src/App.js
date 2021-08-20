import './App.css';
import HangmanPic from './components/hangman-pic';
import Title from './components/Title';
import UserInput from './components/userInput';
import Word from './components/word';
import Reset from './components/Reset';
import { useState } from 'react';

function App() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [hangmanCounter, setHangmanCounter] = useState(0);
  const [wordInUse, setWordInUse] = useState('_');

  return (
    <div>
      <Title />
      <Word
        guessedLetters={guessedLetters}
        wordInUse={wordInUse}
        setWordInUse={setWordInUse}
        setGuessedLetters={setGuessedLetters}
      />
      <HangmanPic hangmanCounter={hangmanCounter} />
      <UserInput
        setGuessedLetters={setGuessedLetters}
        wordInUse={wordInUse}
        setHangmanCounter={setHangmanCounter}
      />
      <br></br>
      <Reset />
    </div>
  );
}

export default App;
