import React from 'react';
import s from '../css/Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

export default Message;