import {rerenderEmpireTrtt} from "../render";

let state = {
    dialogsPage: {
        MyPostsArr: [
            {message: 'Hi, how are you', id: 1, lickesCount: '12'},
            {message: 'Hello main react!', id: 2, lickesCount: 0},

        ],
    },
    profilePage :{
        DialosArr: [
            {name: 'Марина', id: 1,image: "http://www.ramrus.ru/pic/dc/aquaman.jpg"},
            {name: 'Лена', id: 2, image: "http://www.ramrus.ru/pic/dc/batman.jpg"},
            {name: 'Даша', id: 3, image: "http://www.ramrus.ru/pic/dc/cyborg.jpg"},
            {name: 'Лера', id: 4, image: "http://www.ramrus.ru/pic/dc/flash.jpg"},
            {name: 'Вероника', id: 5,image: "http://www.ramrus.ru/pic/dc/supergirl.jpg"},
        ],
        MesagesArr: [
            {inner: 'Hi', id: 1},
            {inner: 'Hello...', id: 2},
            {inner: 'Bu bu', id: 3},
            {inner: 'you', id: 4},
            {inner: 'yo', id: 5},
        ],
            },


}

export let handelPush = (messa) => {

    let result = {message: messa, id: 6, lickesCount: '14'};
    state.dialogsPage.MyPostsArr.push(result);
    rerenderEmpireTrtt(state);
}


export default state;