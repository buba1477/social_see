const ADD_CHANGE_DIALOG = 'ADD-CHANGE-DIALOG';
const ADD_PUSH_DIALOG = 'ADD-PUSH-DIALOG';

let initalState = {
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
};


const dialogReduxer = (state = initalState,action) => {
    switch (action.type) {

        case ADD_CHANGE_DIALOG :
            return {
                ...state,
                newPostTextDialogs: action.text
            };

        case ADD_PUSH_DIALOG :
            let resultDil = {inner: state.newPostTextDialogs, id: 4};
            return {
                ...state,
                MesagesArr: [...state.MesagesArr, ...[resultDil]],
                newPostTextDialogs: ''
            };

        default:
            return state;
    }
}


export const addChanDialogCreateAction = (text) => {
    return {type: ADD_CHANGE_DIALOG,
        text: text }
};
export const addPushDialogCreateAction = () => {
    return {type: ADD_PUSH_DIALOG,
        }
};

export default dialogReduxer;