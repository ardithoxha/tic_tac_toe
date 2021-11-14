import { Provider, connect } from 'react-redux';
import { mapStateToProps,mapDispatchToProps} from './Redux/actioncreators';
import './App.css';
import React from 'react';
import store from './Redux/store';
import { Board, DisplayBoard } from "./boardComponents"


function App(props) {

  let test = props.history.map((step,i) => {return (<div style={{marginLeft: "10px"}}>
    <DisplayBoard
    squares={step.squares}
    stepNumber={i}
    />
    </div>)});


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
        <div style={{display: 'flex', flexWrap: "wrap", maxWidth: "75vw"}} > 
        {test}
        </div>
        
    </div>
  );
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