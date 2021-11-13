import logo from './logo.svg';
import './App.css';

function Square(props) {
  return (
    <div className="square"></div>
  );
}

function Board() {
  return (
    <div className="board">
      <Square box={0}/>
      <Square box={1}/>
      <Square box={2}/>
      <Square box={3}/>
      <Square box={4}/>
      <Square box={5}/>
      <Square box={6}/>
      <Square box={7}/>
      <Square box={8}/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <p>Next Player is:</p>
      <Board />
    </div>
  );
}

export default App;
