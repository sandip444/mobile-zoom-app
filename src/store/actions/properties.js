
import * as actionTypes from './actionTypes';

export const setHeight = (screenHeight, screenWidth) => {
    return {
        type: actionTypes.SET_HEIGHT,
        screenHeight: screenHeight,
        screenWidth: screenWidth
    }
}

export const setNumColumns = (screenHeight, screenWidth) => {
    return {
        type: actionTypes.SET_NUM_COLUMNS,
        screenHeight: screenHeight,
        screenWidth: screenWidth
    }
}
