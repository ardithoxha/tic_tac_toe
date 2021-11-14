export function Square(props) {
    let box = props.box;
    
    return (
      <div className="square" id={box} onClick={props.onClick}>{props.squares[box]}</div>
    );
  }
  
  export function DisplaySquare(props) {
    let box = props.box;
    
    return (
      <div className="square" id={box}>{props.squares[box]}</div>
    );
  }