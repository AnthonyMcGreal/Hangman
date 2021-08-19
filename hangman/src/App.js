
import './App.css';
import HangmanPic from './components/hangman-pic';
import Title from './components/Title';
import UserInput from './components/userInput';
import Word from './components/word';
import { useState } from 'react'

function App() {
  const [userInput, setUserInput] = useState('')
  return (
    <div>
      <Title />
      <Word userInput={userInput} />
      <HangmanPic />
      <UserInput userInput={userInput} setUserInput={setUserInput} />
    </div>
  );
}

export default App;
