import profileReduxer from "./profile-reduxer";
import dialogReduxer from "./dialogs-reduxer";
import sidebarReduxer from "./sidebar-reduxer";

const ADD_PUSH = 'ADD-PUSH';
const ADD_CHANGE = 'ADD-CHANGE';
const ADD_CHANGE_DIALOG = 'ADD-CHANGE-DIALOG';
const ADD_PUSH_DIALOG = 'ADD-PUSH-DIALOG';

let stor = {
    _state: {
        dialogsPage: {
            MyPostsArr: [
                { message: 'Hi, how are you', id: 1, lickesCount: '12' },
                { message: 'Hello main react!', id: 2, lickesCount: 0 },

            ],
            newPostText: 'go-go'
        },
        profilePage: {
            DialosArr: [
                { name: 'Марина', id: 1, image: "http://www.ramrus.ru/pic/dc/aquaman.jpg" },
                { name: 'Лена', id: 2, image: "http://www.ramrus.ru/pic/dc/batman.jpg" },
                { name: 'Даша', id: 3, image: "http://www.ramrus.ru/pic/dc/cyborg.jpg" },
                { name: 'Лера', id: 4, image: "http://www.ramrus.ru/pic/dc/flash.jpg" },
                { name: 'Вероника', id: 5, image: "http://www.ramrus.ru/pic/dc/supergirl.jpg" },
            ],
            MesagesArr: [
                { inner: 'Hi', id: 1 },
                { inner: 'Hello...', id: 2 },
                { inner: 'Bu bu', id: 3 },
                { inner: 'you', id: 4 },
                { inner: 'yo', id: 5 },
            ],
            newPostTextDialogs: 'Приветик'
        },
        sideBar: {}

    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('trahs')
    },

    subScribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {


        this._state.dialogsPage = profileReduxer(this._state.dialogsPage,action)
        this._state.profilePage = dialogReduxer(this._state.profilePage,action)
        this._state.sideBar = sidebarReduxer(this._state.sideBar,action)
        this._callSubscriber(this.getState());

        // if (action.type === ADD_PUSH) {
        //     let result = {
        //         message: this.getState().dialogsPage.newPostText,
        //         id: 6,
        //         lickesCount: '14'
        //     };
        //     this.getState().dialogsPage.MyPostsArr.push(result);
        //     this.getState().dialogsPage.newPostText = '';
        //     this._callSubscriber(this.getState());
        //
        // } else if (action.type === ADD_CHANGE) {
        //     this.getState().dialogsPage.newPostText = action.text;
        //     this._callSubscriber(this.getState());
        // }else if (action.type === ADD_CHANGE_DIALOG) {
        //     this.getState().profilePage.newPostTextDialogs = action.text;
        //     this._callSubscriber(this.getState());
        // }else if (action.type === ADD_PUSH_DIALOG) {
        //
        //     let resultDil =  { inner: this.getState().profilePage.newPostTextDialogs, id: 4 };
        //
        //     this.getState().profilePage.MesagesArr.push(resultDil);
        //     this.getState().profilePage.newPostTextDialogs = '';
        //     this._callSubscriber(this.getState());
        // }
    }
}

// export const addPushCreateAction = () => {
//     return {type: ADD_PUSH}
//     };
//    export const addChangeCreateAction = (text) => {
//         return {type: ADD_CHANGE,
//                 text: text }
//         };
//
//         export const addChanDialogCreateAction = (text) => {
//             return {type: ADD_CHANGE_DIALOG,
//                     text: text }
//             };
//             export const addPushDialogCreateAction = (text) => {
//                 return {type: ADD_PUSH_DIALOG,
//                         text: text }
//                 };

window.state = stor;





// export default stor;