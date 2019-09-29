import React from 'react';
import s from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import MessagesItems from "./MessagesItems/MessagesItems";
import { addChanDialogCreateAction } from './../../redux/state';
import { addPushDialogCreateAction } from './../../redux/state';


const Dialogs = (props2) => {


    let DialosNew = props2.dialong.map((dialogi) => {
        return (
            <DialogItems name={dialogi.name} id={dialogi.id} img={dialogi.image} />
        )
    });


    let MessagesNew = props2.message1.map((messagei) => {
        return (
            <MessagesItems inner={messagei.inner} id={messagei.id} />
        )
    });



    let pushMes = (e) => {
        let text = e.target.value;

        props2.dispatch1(addChanDialogCreateAction(text))
       
    }

    let pushDil = () => {
        props2.dispatch1(addPushDialogCreateAction());
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {DialosNew}

            </div>

            <div className={s.messages}>

                {MessagesNew}
                <div>
                    <textarea onChange={pushMes} value={props2.textareas}></textarea>
                </div>
                <div>
                    <button onClick={pushDil}> Push ze tempo</button>
                </div>
            </div>

        </div>
    )
};

export default Dialogs;