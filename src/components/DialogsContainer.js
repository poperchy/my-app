import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/message-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from '../StoreContext';
import {connect} from "react-redux";


// const DialogsContainer = () => {
//
//
//     return <StoreContext.Consumer>
//         {(store) => {
//
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             };
//
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body));
//             };
//
//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                             sendMessage={onSendMessageClick}
//                             messagePage={store.getState().messagePage}/>
//         }
//         }
//     </StoreContext.Consumer>
// };

let mapStateToProps = (state) => {

    return {
        messagePage: state.messagePage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;