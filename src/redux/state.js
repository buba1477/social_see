

let store = {
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
        },


    },
    getState() {
        
        return this._state
    },
    _rerenderEmpireTrtt() {
        console.log('trahs')
    },
    handelPush() {

        let result = { message: this._state.dialogsPage.newPostText, id: 6, lickesCount: '14' };
        this._state.dialogsPage.MyPostsArr.push(result);
        this._state.dialogsPage.newPostText = '';
        this.rerenderEmpireTrtt(this._state);
    },
    changeNevText(text) {
        this._state.dialogsPage.newPostText = text;
        this._rerenderEmpireTrtt(this._state);
    },
    subScribe(observer) {
        this._rerenderEmpireTrtt = observer;
    }
}



window.state = store;





export default store;