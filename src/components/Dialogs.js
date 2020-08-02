import React from 'react';
import s from '../css/Dialogs.module.css'
import DialogItem from './DialogItem';
import Message from './Message';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let state = props.messagePage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                                      id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}/>);
    let newMessageBody = state.newMessageBody;
    let AddNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Redirect to={"/login"}/>;


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messagePull}>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                </div>
                <AddMessageReduxForm onSubmit={AddNewMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm =(props) =>{
    return(
    <form onSubmit={props.handleSubmit}>
        <div className={s.wrap}>
            <Field className={s.textarea} component={"textarea"} id="textarea"  value={"newMessageBody"} name={"newMessageBody"} placeholder={"enter you message"}/>
            <div className={s.messageWrapBtn}>
                <button className={s.messageBtn}>Send</button>
            </div>
        </div>
    </form>
    )
};

const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;