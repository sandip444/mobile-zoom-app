
import * as actionTypes from './actionTypes';

export const openChatWindow = () => {
    return {
        type: actionTypes.OPEN_CHAT_WINDOW
    }
}

export const closeChatWindow = () => {
    return {
        type: actionTypes.CLOSE_CHAT_WINDOW
    }
}

export const sendChatMessage = (message) => {
    return {
        type: actionTypes.SEND_CHAT_MESSAGE,
        message: message
    }
}

export const receiveChatMessage = (message) => {
    return {
        type: actionTypes.RECEIVE_CHAT_MESSAGE,
        message: message
    };
}
