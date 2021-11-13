import { checkForWinner } from "../App";

const defaultState = {
    squares: Array(9).fill(null), 
    xIsNext: true,
    };


const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case "CHOICE":
            
                if(state.squares[action.index] == null) {
                    let squares = state.squares.slice();
                    if(checkForWinner(squares)) {
                        return state;
                    }

                    squares[action.index] = state.xIsNext ? "X" : "O";
                    return {squares: squares, xIsNext: !state.xIsNext};
                    
                } else {
                    return state;
                }
            
        case "RESET":
            let squares = Array(9).fill(null);
            return {
                squares: squares,
                xIsNext: true
            };    
        default:
            return state;
    }
}

export default reducer;