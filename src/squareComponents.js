export function Square(props) {
    const box = props.box;
    
    return (
      <div 
        className={props.forDisplay? "square nohover": "square hover"} 
        id={box} 
        onClick={props.forDisplay ? null: props.onClick }>{props.squares[box]}
      </div>
    );
  }
