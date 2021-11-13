const defaultState = {squares: Array(9).fill(null)};


const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case "CHOICE":
            console.log("handleClick() has been called. Index is " + action.index);
            let squares = state.squares.slice();
            squares[action.index] = "X"
            return {squares: squares};
        default:
            return state;
    }
}

export default reducer;