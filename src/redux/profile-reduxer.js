const ADD_PUSH = 'ADD-PUSH';
const ADD_CHANGE = 'ADD-CHANGE';

let initalStat = {
    MyPostsArr: [
        {message: 'Hi, how are you', id: 1, lickesCount: '12'},
        {message: 'Hello main react!', id: 2, lickesCount: 0},

    ],
    newPostText: 'go-go'
};

const profileReduxer = (state = initalStat, action) => {

    switch (action.type) {
        case ADD_PUSH :
            let result = {
                message: state.newPostText,
                id: 6,
                lickesCount: '14'
            };
            return {
                ...state,
                MyPostsArr: [...state.MyPostsArr, ...[result]],
                newPostText: ''
            }
        case ADD_CHANGE :
            return {
                ...state,
                newPostText: action.text,
            }

        default:
            return state;
    }
}
export const addPushCreateAction = () => {
    return {type: ADD_PUSH}
};
export const addChangeCreateAction = (text) => {
    return {
        type: ADD_CHANGE,
        text: text
    }
};


export default profileReduxer;