import React from 'react';
import stor from './redux/redux-store'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let rerenderEmpireTrtt = (state) => {

    ReactDOM.render(
       
        <App appState={stor.getState()} dispatch={stor.dispatch.bind(stor)} store={stor}/>,
        
        document.getElementById('root')
    );


}


rerenderEmpireTrtt(stor.getState());

stor.subscribe( () => {
    let state = stor.getState();
    rerenderEmpireTrtt(state)
});