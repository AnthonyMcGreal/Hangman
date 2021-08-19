import React from 'react';
import { useState } from 'react'

const Word = () => {
    const [wordInUse, setWordInUse] = useState('')
    const displayedWord = wordInUse.split('').map((letter) => {
        return '_'
    })
    return (
        <div>
            <p>{displayedWord.join(' ')}</p>
            <button onClick={() => {
                setWordInUse((currentWord) => {
                    const randomNum = Math.floor(Math.random() * 5)
                    return hiddenWords[randomNum];
                })
            }}>Generate Word</button>
        </div>
    );
};

export default Word;

const hiddenWords = ['northcoders', 'function', 'react', 'express', 'babel']