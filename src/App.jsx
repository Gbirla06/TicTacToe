import { useState } from 'react';
import Board from './Components/Board'
import './Style.scss'
import { calculateWinner } from './Winner';

function App() {
  
  const [squares,setSquares] = useState(Array(9).fill(null));
  const [isXNext,setIsXNext] = useState(false);

  const nextPlayer = isXNext==true?'X':'O';
  const winner = calculateWinner(squares);
  const statusMessage = winner? `Winner is ${winner}`: `Next player is ${nextPlayer}`;
  const handleSquareClick = (clickedPosition) => {
      
      if(squares[clickedPosition] || winner)
          return;

      setSquares((currentSquare) => {

          return currentSquare.map((squareValue,position) => {

              if(position === clickedPosition){
                  return isXNext==true?'X':'O';
              }
              return squareValue
          })
      });
      setIsXNext((currentIsXNext) =>{
          return !currentIsXNext;
      })

  };  


  return (
    <div className='app'>
          <h1>{statusMessage}</h1>
         <Board squares={squares} handleSquareClick={handleSquareClick}/>    
    </div>
  )
}

export default App
