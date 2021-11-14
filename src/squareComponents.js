export function Square(props) {
    const box = props.box;
    
    return (
      <div className="square" id={box} onClick={props.forDisplay ? null: props.onClick }>{props.squares[box]}</div>
    );
  }
