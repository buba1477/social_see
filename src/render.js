import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {handelPush} from './redux/state';




export let rerenderEmpireTrtt = (state) => {
  ReactDOM.render(
      <App appState = {state} handRes = {handelPush}/>,
      document.getElementById('root')
  );


}



