import { Provider, connect } from 'react-redux';
import { mapStateToProps,mapDispatchToProps} from './Redux/actioncreators';
import './App.css';
import React from 'react';
import store from './Redux/store';


function Square(props) {
  
  return (
    <div className="square" id={props.box} onClick={props.onClick}>{props.box}</div>
  );
}

function Board(props) {
  
  
  return (
    <div className="board">
      {/* {console.log(props.squares)} */}
      <Square box={0}  onClick={() => props.onClick(0)} squares={props.squares}/>
      <Square box={1}  onClick={() => props.onClick(1)} squares={props.squares}/>
      <Square box={2}  onClick={() => props.onClick(2)} squares={props.squares}/>
      <Square box={3}  onClick={() => props.onClick(3)} squares={props.squares}/>
      <Square box={4}  onClick={() => props.onClick(4)} squares={props.squares}/>
      <Square box={5}  onClick={() => props.onClick(5)} squares={props.squares}/>
      <Square box={6}  onClick={() => props.onClick(6)} squares={props.squares}/>
      <Square box={7}  onClick={() => props.onClick(7)} squares={props.squares}/>
      <Square box={8}  onClick={() => props.onClick(8)} squares={props.squares}/>
    </div>
  );
}

function App(props) {
  return (
    <div className="App">
      <p>Next Player is:</p>
      <Board onClick={(i) => props.handleClick(i)} squares={props.squares}/>
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