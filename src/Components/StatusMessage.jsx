import { calculateWinner } from "../Winner";

const StatusMessage = ({isXNext,winner,squares}) => {
    
    const noMoveLeft = squares.every((squareValue) => {
        return squareValue!=null;
    })
    const nextPlayer = isXNext==true?'X':'O';
  
    const renderStatusMessage = () => {
        if(winner){
            return <>
                        Winner is 
                        <span className={winner=='O'?"text-green":"text-orange"}>
                            {winner}
                        </span>
                    </>
        }
        else if(noMoveLeft){
            return <>
                    <span className="text-orange">X</span> and {' '}
                    <span className="text-green">O</span> tied !!! 
                 </>
        }
        else{
            return <>
                        Next player is 
                        <span className={isXNext==true?"text-orange":"text-green"}>
                            {nextPlayer}
                        </span>
                    </>
        }
    }

    return <h1>{renderStatusMessage()}</h1>
};

export default StatusMessage;