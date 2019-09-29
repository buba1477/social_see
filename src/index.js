import React from 'react';
import stor from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let rerenderEmpireTrtt = (state) => {

    ReactDOM.render(
       
        <App appState={state} dispatch={stor.dispatch.bind(stor)} />,
        
        document.getElementById('root')
    );


}


rerenderEmpireTrtt(stor.getState());

stor.subScribe(rerenderEmpireTrtt);