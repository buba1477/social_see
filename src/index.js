import React from 'react';
import stor from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let rerenderEmpireTrtt = (state) => {
    debugger
    ReactDOM.render(
       
        <App appState={state} handRes={stor.handelPush.bind(stor)} handleText={stor.changeNevText.bind(stor)}/>,
        
        document.getElementById('root')
    );


}


rerenderEmpireTrtt(stor.getState());

stor.subScribe(rerenderEmpireTrtt);