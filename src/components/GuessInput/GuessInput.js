import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ tentativeGuess });

    // Call the parent function to handle the guess
    handleSubmitGuess(tentativeGuess);

    // Clear the input field after submission
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        required
        disabled= {gameStatus!=="running"}
        id="guess-input"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Enter a 5-letter word"
        value={tentativeGuess}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
      />
    </form>
  );
}

export default GuessInput;
