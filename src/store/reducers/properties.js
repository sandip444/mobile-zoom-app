import * as actionTypes from '../actions/actionTypes';

const initialState = {
    height: 150,
    numColumns: 3
}

const setHeight = (state, action) => {
    let updatedHeight = null;
    let updatedState = null;
    let screenHeight = action.screenHeight;
    let screenWidth = action.screenWidth;
    let numColumns = state.numColumns;

    if (screenHeight >= screenWidth) {
        updatedHeight = (screenHeight / (numColumns * 2.5));
    } else {
        updatedHeight = (screenWidth / (numColumns * 1.5));
    }

    updatedState = { height: updatedHeight };

    return { ...state, ...updatedState };
}

const setNumColumns = (state, action) => {
    let updatedNumColums = null;
    let updatedState = null;
    let screenHeight = action.screenHeight;
    let screenWidth = action.screenWidth;

    if (screenHeight >= screenWidth) {
        updatedNumColums = Math.floor(screenHeight / screenWidth);
    } else {
        updatedNumColums = Math.floor(screenWidth * 2 / screenHeight);
    }

    updatedState = { numColumns: updatedNumColums };
    return { ...state, ...updatedState };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_HEIGHT: return setHeight(state, action);
        case actionTypes.SET_NUM_COLUMNS: return setNumColumns(state, action);
        default: return state;
    }
}

export default reducer;