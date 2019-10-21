import React from 'react';
import {addChanDialogCreateAction} from './../../redux/dialogs-reduxer';
import {addPushDialogCreateAction} from './../../redux/dialogs-reduxer';
import Dialogs from "./Dialogs";

import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialong: state.profilePage.DialosArr,

        textareas: state.profilePage.newPostTextDialogs,

        message1: state.profilePage.MesagesArr
    }
};

let mapDispathToProps = (dispatch) => {
    return {
        pushMesDialog: (text) => {
            let action = addChanDialogCreateAction(text);
            dispatch(action);
        },
        pushDilDialog: () => {
            dispatch(addPushDialogCreateAction());
        }
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);
export default DialogsContainer;