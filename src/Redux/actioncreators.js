const CHOICE = "CHOICE";
const RESET = "RESET";
const JUMP = "JUMP"

const handleClick = (i) => {
return {
    type: CHOICE,
    index: i,
    }
}

const resetBoard =() => {
    return {
        type: RESET
    }
}

const goToStep = (i) => {
    return {
        type: JUMP,
        move: i
    }
}

export const mapStateToProps = (state) => {
    return state;
}

export const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (i) => {dispatch(handleClick(i))},
        resetBoard: () => {dispatch(resetBoard())},
        goToStep: (i) => {dispatch(goToStep(i))}
    };
}