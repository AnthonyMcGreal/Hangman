import React from 'react';

const userInput = ({ userInput, setUserInput }) => {
    return (
        <div>
            <form>
                <label htmlFor="userGuess">Enter Letter</label>
                <input id="userGuess" type="text"  ></input>
                <button type="submit" onClick={(event) => {
                    console.log(event.target)
                    setUserInput(event.target.value)
                }}>Submit</button>
            </form>
        </div>
    );
};

export default userInput;