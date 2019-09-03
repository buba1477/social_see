import React from 'react';
import s from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import MessagesItems from "./MessagesItems/MessagesItems";


const Dialogs = (props2) => {


    let DialosNew = props2.dialong.map((dialogi) => {
        return (
            <DialogItems name={dialogi.name} id={dialogi.id} img={dialogi.image}/>
        )
    });


    let MessagesNew = props2.message1.map((messagei) => {
        return (
            <MessagesItems inner={messagei.inner} id={messagei.id}/>
        )
    });


    let valMess = React.createRef();
    let pushMes = () => {
        let text = valMess.current.value;
       console.log(typeof(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {DialosNew}

            </div>

            <div className={s.messages}>

                {MessagesNew}
                <div>
                    <textarea ref={valMess}></textarea>
                </div>
                <div>
                    <button onClick={pushMes}> Push ze tempo</button>
                </div>
            </div>

        </div>
    )
};

export default Dialogs;