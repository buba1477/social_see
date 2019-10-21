import {combineReducers, createStore} from "redux";
import profileReduxer from "./profile-reduxer";
import dialogReduxer from "./dialogs-reduxer";
import sidebarReduxer from "./sidebar-reduxer";
import usersReduxer from "./users-reduxer";

let reducers = combineReducers({
    dialogsPage: profileReduxer,
    profilePage: dialogReduxer,
    sideBar: sidebarReduxer,
    usersPage: usersReduxer

});

let stor = createStore(reducers);

window.stor=stor;

console.log(stor.getState());
export default stor;