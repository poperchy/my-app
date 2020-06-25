import React from 'react';
import s from '../css/Dialogs.module.css'
import DialogItem from './DialogItem';
import Message from './Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/message-reducer";
import {ClassDeclaration as m} from "@babel/types";


const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogsElements }
            </div>
            <div className={s.messagePull}>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
                <div className={s.wrap}>
                    <textarea className={s.textarea} onChange={onNewMessageChange} value={newMessageBody}
                              name="textarea" id="textarea"/>
                    <div className={s.messageArea}>
                    </div>
                    <div className={s.messageWrapBtn}>
                        <button onClick={onSendMessageClick} className={s.messageBtn}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;