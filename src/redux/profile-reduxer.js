
const ADD_PUSH = 'ADD-PUSH';
const ADD_CHANGE = 'ADD-CHANGE';

 const profileReduxer = (state,action) => {

     switch (action.type) {
         case ADD_PUSH :
             let result = {
                 message: state.newPostText,
                 id: 6,
                 lickesCount: '14'
             };
             state.MyPostsArr.push(result);
             state.newPostText = '';
             return state;
         case ADD_CHANGE :
             state.newPostText = action.text;
             return state;
         default:
             return state;
     }
 }
export const addPushCreateAction = () => {
    return {type: ADD_PUSH}
};
export const addChangeCreateAction = (text) => {
    return {type: ADD_CHANGE,
        text: text }
};
//
//     if (action.type === ADD_PUSH) {
//         let result = {
//             message: state.newPostText,
//             id: 6,
//             lickesCount: '14'
//         };
//         state.MyPostsArr.push(result);
//         state.newPostText = '';
//
//
//     } else if (action.type === ADD_CHANGE) {
//         state.newPostText = action.text;
//
//     }
//
//     return state;
// }

export default profileReduxer;