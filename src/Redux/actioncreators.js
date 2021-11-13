const CHOICE = "CHOICE";
const RESET = "RESET";

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

export const mapStateToProps = (state) => {
    return state;
}

export const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (i) => {dispatch(handleClick(i))},
        resetBoard: () => {dispatch(resetBoard())}
    };
}