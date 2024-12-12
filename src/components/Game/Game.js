import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameOver from "../GameOver/GameOver";
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [gameStatus,setGameStatus] = React.useState('running');

  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(value) {
    const nextGuesses = [...guesses, value];
    setGuesses(nextGuesses)

    if(value.toUpperCase()===answer){
      setGameStatus('win')
    }
    else if(nextGuesses.length>= NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost')
    }
  }

  return (
    <>
    {gameStatus}
      <h1>Word Guessing Game</h1>
      <GuessResults guesses={guesses} answer ={answer}/>
      <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
      {gameStatus!=='running' &&
        <GameOver gameStatus={gameStatus} numOfguesses={guesses.length} answer={answer} />
      }
    </>
  );
}

export default Game;
