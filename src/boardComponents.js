import { Square, DisplaySquare } from './squareComponents';
import { checkForWinner } from './checkForWinner';

export function Board(props) {

    const renderSquare = (i) => {
      return (
        <Square box={i}  onClick={() => props.onClick(i)} squares={props.history[props.stepNumber].squares}/>
      );
    }
  
    let nextPlayerIs = props.xIsNext ? "X" : "O";
    let status;
    let squares = props.history[props.stepNumber].squares
    let winner = checkForWinner(squares);
  
    if(winner) {
      status = winner + " is the Winner!";
    } else {
      status = "Next Player is: " + nextPlayerIs;
    }
    
    return (
      <div >
        <div style={{textAlign: "center"}}>{status}</div>{<br/>}
        <div className="board">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
          {<br/>}
        <button className="button" onClick={props.reset}>
          Reset Board</button>
      </div>
    );
  }
  
  export function DisplayBoard(props) {
  
    const renderSquare = (i) => {
      return (
        <DisplaySquare box={i} squares={props.squares}/>
      );
    }
    
    let status;
    let squares = props.squares
    let winner = checkForWinner(squares);
  
    if(winner) {
      status = winner + " is the Winner!";
    } else {
      status = "Move " + props.stepNumber;
    }
    
    return (
      <div >
        <div style={{textAlign: "center"}}>{status}</div>{<br/>}
        <div className="board">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
  }