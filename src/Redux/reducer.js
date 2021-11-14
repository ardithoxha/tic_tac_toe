import { checkForWinner } from "../checkForWinner";

const defaultState = {
    history: [{squares: Array(9).fill(null)}],
    stepNumber: 0, 
    xIsNext: true,
    };


const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case "CHOICE":
            
            if(checkForWinner(state.history[state.stepNumber].squares)) {
                return state;
            }

            if(state.history[state.stepNumber].squares[action.index] == null) {

                let squares = state.history[state.stepNumber].squares.slice();
                squares[action.index] = state.xIsNext ? "X" : "O";
                
                return {
                    history: state.history.concat({squares: squares}),
                    stepNumber: state.stepNumber + 1, 
                    xIsNext: !state.xIsNext
                };
                
            } else {
                return state;
            }
        case "JUMP":
            return {
                history: state.history.slice(0,action.move+1),
                stepNumber: action.move,
                xIsNext: (action.move%2 === 0? true: false)
            }
        case "RESET":
            let squares = Array(9).fill(null);
            return {
                history: [{squares: squares}],
                stepNumber: 0,
                xIsNext: true
            };    
        default:
            return state;
    }
}

export default reducer;