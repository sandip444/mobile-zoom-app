import * as actiontypes from '../actions/actionTypes';

const initialState = {
    showChatWindow: false,
    chatMessages: [],
    chatMessage: {
        data: '',
        type: '',
    }
};

const openChatWindow = (state, action) => {
    const updatedState = {
        showChatWindow: true
    };
    return { ...state, ...updatedState };
}

const closeChatWindow = (state, action) => {
    const updatedState = {
        showChatWindow: false
    };
    return { ...state, ...updatedState };
}

const sendChatMessage = (state, action) => {
    let updatedChatMessages = [...state.chatMessages];
    updatedChatMessages.push({
        Me: action.message
    });

    let updatedChatMessage = { ...state.chatMessage };
    updatedChatMessage.data = action.message;
    
    const updatedState = {
        chatMessages: updatedChatMessages,
        chatMessage: updatedChatMessage
    };
    return { ...state, ...updatedState };
}

const receiveChatMessage = (state, action) => {
    let updatedChatMessages = [...state.chatMessages];
    updatedChatMessages.push({
        Other: action.message
    });
    const updatedState = {
        chatMessages: updatedChatMessages
    };
    return { ...state, ...updatedState };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontypes.OPEN_CHAT_WINDOW: return openChatWindow(state, action);
        case actiontypes.CLOSE_CHAT_WINDOW: return closeChatWindow(state, action);
        case actiontypes.SEND_CHAT_MESSAGE: return sendChatMessage(state, action);
        case actiontypes.RECEIVE_CHAT_MESSAGE: return receiveChatMessage(state, action);
        default: return state;
    }
}

export default reducer;
