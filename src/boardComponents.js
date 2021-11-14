import { Square, DisplaySquare } from './squareComponents';
import { checkForWinner } from './checkForWinner';

export function Board(props) {

    const renderSquare = (i) => {
      return (
        <Square box={i} forDisplay={props.forDisplay} onClick={ props.forDisplay ? null : () => props.onClick(i)} squares={props.forDisplay ? props.squares : props.history[props.stepNumber].squares}/>
      );
    }

    let rows = [];
    for(let i =0; i<9; i++) {
        rows.push(renderSquare(i));
    }
  
    let nextPlayerIs = props.forDisplay ? null: props.xIsNext ? "X" : "O";
    let status;
    let squares = props.forDisplay ? props.squares : props.history[props.stepNumber].squares;
    let winner = checkForWinner(squares);
  
    if(winner) {
      status = winner + " is the Winner!";
    } else {
      status = props.forDisplay ? "Move " + props.stepNumber: "Next Player is: " + nextPlayerIs;
    }
    
    return (
      <div >
        <div className="status">{status}</div>{<br/>}
        <div className="board">
          {rows}
        </div>
          {<br/>}
        <button className={props.forDisplay ? "disabled" : "button"} onClick={props.reset}>
          Reset Board</button>
      </div>
    );
  }