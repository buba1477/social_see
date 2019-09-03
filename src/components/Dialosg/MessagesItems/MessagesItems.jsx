import React from 'react';
import s from './../Dialogs.module.css'


const MessagesItems = (props) => {


    return (
        <div>


            <div>

                <div className={s.messag}>{props.inner}</div>

            </div>

        </div>
    )
}


export default MessagesItems;