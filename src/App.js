import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Classnav/Classnav';
import Content from './components/Content/Content';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialosg/DialogsContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wripper'>
                <Header/>
                <Nav/>
                <div className='app-wripper-content'>

                    <Route path='/profile' render = {() => <Content  /> } />
                    <Route path='/messages' render = {() => <DialogsContainer />} />


                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
