const CHOICE = "CHOICE";

const handleClick = (i) => {
return {
    type: CHOICE,
    index: i
}
}

export const mapStateToProps = (state) => {
    return state;
}

export const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (i) => {dispatch(handleClick(i))}
    };
}