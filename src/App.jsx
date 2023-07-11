import { useState } from 'react';
import Board from './Components/Board'
import './Style.scss'
import StatusMessage from './Components/StatusMessage';
import { calculateWinner } from './Winner';

function App() {
  
  const [squares,setSquares] = useState(Array(9).fill(null));
  const [isXNext,setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  
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
          <StatusMessage isXNext={isXNext} winner={winner} squares={squares} />
         <Board squares={squares} handleSquareClick={handleSquareClick}/>    
    </div>
  )
}

export default App
