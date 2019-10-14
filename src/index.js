import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import stor from "./redux/redux-store";






let rerenderEmpireTrtt = () => {

    ReactDOM.render(
       <Provider store={stor}>
            <App/>
       </Provider>,
        document.getElementById('root')

    );


}


rerenderEmpireTrtt();

// stor.subscribe( () => {
//     rerenderEmpireTrtt()
// });