const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hello my name is ...'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'How are you?'},
    ],
    dialogsData: [
        {id: 1, name: 'Vasik'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Pi'},
        {id: 4, name: 'Shlapka'},
        {id: 5, name: 'Kto eto'},
        {id: 6, name: 'Artyrchik'},
        {id: 7, name: 'Olga'},
    ],
    newMessageBody: '',

};


const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE :
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default :
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default messageReducer;