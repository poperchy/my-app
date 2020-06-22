import React from 'react';
import s from '../css/Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/message/" + props.id} activeClassName={s.activeDialog}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;