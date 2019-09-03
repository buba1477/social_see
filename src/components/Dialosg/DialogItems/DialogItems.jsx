import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItems = (props) => {
    let path = '/messages/' + props.id;

    return (
        <div className={s.dialog}>
            <div >
                <img src={props.img} className={s.avaim}></img>
            </div>
            <div className={s.dimg}>
            <NavLink to={path} > {props.name} </NavLink>
            </div>
        </div>
    )
}



export default DialogItems;