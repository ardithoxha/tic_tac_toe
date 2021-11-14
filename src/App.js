import { Provider, connect } from 'react-redux';
import { mapStateToProps,mapDispatchToProps} from './Redux/actioncreators';
import './App.css';
import React from 'react';
import store from './Redux/store';


function Square(props) {
  let box = props.box;
  
  return (
    <div className="square" id={box} onClick={props.onClick}>{props.squares[box]}</div>
  );
}

function Board(props) {

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

function App(props) {

let moves =  props.history.map(
              (step,i) => {return (<li key={i}>
                  <button onClick={() => {props.goToStep(i)}}>{i===0 ? "Go to the start" : "Go to step " + i}</button>
                  </li>);});

  return (
    <div className="App">
      <Board 
        reset={() => props.resetBoard()} 
        onClick={(i) => props.handleClick(i)}
        stepNumber = {props.stepNumber} 
        history={props.history} 
        xIsNext={props.xIsNext}
        />

        <div>
          <div className="history">
            <p>Moves History!</p>
            <ol>{moves}</ol>
            </div>
        </div>
    </div>
  );
}

export function checkForWinner(squares){

  let winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];


for (let i =0; i<winner.length;i++) {
  let [a,b,c] = winner[i];
  if(squares[a] === squares[b] && squares[a] === squares[c]) {
    return squares[a];
  }
}

return false;
}

const Container = connect(mapStateToProps,mapDispatchToProps)(App);
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default AppWrapper;