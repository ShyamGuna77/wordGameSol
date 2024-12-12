
import React from "react";

function GameOver({gameStatus,numOfguesses,answer}){
    if(gameStatus==='win'){
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{numOfguesses} {numOfguesses===1? 'guess':'guesses'}</strong>.
          </p>
        </div>
      );
    }else if(gameStatus==='lost'){
        return (
          <div className="sad banner">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        );
    }
}

export default GameOver;