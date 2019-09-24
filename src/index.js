import React from 'react';
import store from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"


let rerenderEmpireTrtt = (store) => {
    ReactDOM.render(
        <BrowserRouter>
        <App appState={store} handRes={store.handelPush} handleText={store.changeNevText}/>,
        </BrowserRouter>,
        document.getElementById('root')
    );


}

store.subScribe(rerenderEmpireTrtt);

rerenderEmpireTrtt(store.getState());

