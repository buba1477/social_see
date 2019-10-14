import {combineReducers, createStore} from "redux";
import profileReduxer from "./profile-reduxer";
import dialogReduxer from "./dialogs-reduxer";
import sidebarReduxer from "./sidebar-reduxer";

let reducers = combineReducers({
    dialogsPage: profileReduxer,
    profilePage: dialogReduxer,
    sideBar: sidebarReduxer

});

let stor = createStore(reducers);
window.stor=stor;

export default stor;