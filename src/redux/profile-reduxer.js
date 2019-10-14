
const ADD_PUSH = 'ADD-PUSH';
const ADD_CHANGE = 'ADD-CHANGE';

let initalState = {
    MyPostsArr: [
        { message: 'Hi, how are you', id: 1, lickesCount: '12' },
        { message: 'Hello main react!', id: 2, lickesCount: 0 },

    ],
    newPostText: 'go-go'
};

 const profileReduxer = (state = initalState,action) => {

     switch (action.type) {
         case ADD_PUSH :
         { let result = {
                 message: state.newPostText,
                 id: 6,
                 lickesCount: '14'
             };
         let copyStore = {...state}
             copyStore.MyPostsArr =[...state.MyPostsArr]
             copyStore.MyPostsArr.push(result);
             copyStore.newPostText = '';
             return copyStore;}
         case ADD_CHANGE :
             let copyStore = {...state}
             copyStore.newPostText = action.text;
             return copyStore;
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