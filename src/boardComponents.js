import { Square, DisplaySquare } from './squareComponents';
import { checkForWinner } from './checkForWinner';
import { render } from '@testing-library/react';

export function Board(props) {

    const renderSquare = (i) => {
      return (
        <Square box={i}  onClick={() => props.onClick(i)} squares={props.history[props.stepNumber].squares}/>
      );
    }

    let rows = [];
    for(let i =0; i<9; i++) {
        rows.push(renderSquare(i));
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
          {rows}
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
    let rows = [];
    for(let i =0; i<9; i++) {
        rows.push(renderSquare(i));
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
          {rows}
        </div>
      </div>
    );
  }