const ADD_CHANGE_DIALOG = 'ADD-CHANGE-DIALOG';
const ADD_PUSH_DIALOG = 'ADD-PUSH-DIALOG';

 const dialogReduxer = (state,action) => {

   switch (action.type ) {
       case ADD_CHANGE_DIALOG :
           state.newPostTextDialogs = action.text;
           return state;
       case ADD_PUSH_DIALOG :
           let resultDil =  { inner: state.newPostTextDialogs, id: 4 };

           state.MesagesArr.push(resultDil);
           state.newPostTextDialogs = '';
           return state;
       default:
           return state;

   }
    // if (action.type === ADD_CHANGE_DIALOG) {
    //     state.newPostTextDialogs = action.text;
    //
    // }else if (action.type === ADD_PUSH_DIALOG) {
    //
    //     let resultDil =  { inner: state.newPostTextDialogs, id: 4 };
    //
    //     state.MesagesArr.push(resultDil);
    //     state.newPostTextDialogs = '';
    //
    // }

    //
    // return state;
}



export const addChanDialogCreateAction = (text) => {
    return {type: ADD_CHANGE_DIALOG,
        text: text }
};
export const addPushDialogCreateAction = (text) => {
    return {type: ADD_PUSH_DIALOG,
        text: text }
};

export default dialogReduxer;