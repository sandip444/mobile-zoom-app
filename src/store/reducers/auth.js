
import * as actiontypes from '../actions/actionTypes';

const initialState = {
    email: null,
    password: null,
    isAuthenticated: false
};

const signIn = (state, action) => {
    let updatedState = null;
    if (action.email === state.email) {
        if (action.password === state.password) {
            updatedState = { isAuthenticated: true };
        }
    } else {
        updatedState = { isAuthenticated: false };
    }
    return { ...state, ...updatedState };
}

const signUp = (state, action) => {
    const updatedState = {
        email: action.email,
        password: action.password
    };
    return { ...state, ...updatedState };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontypes.SIGN_IN: return signIn(state, action);
        case actiontypes.SIGN_UP: return signUp(state, action);
        default: return state;
    }
}

export default reducer;
