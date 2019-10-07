import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Classnav/Classnav';
import Content from './components/Content/Content';
import Dialogs from "./components/Dialosg/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wripper'>
                <Header/>
                <Nav/>
                <div className='app-wripper-content'>

                    <Route path='/profile' render = {() =>
                        <Content store ={props.store} /> } />
                    <Route path='/messages' render = {() =>
                        <Dialogs textareas ={ props.appState.profilePage.newPostTextDialogs} dialong = {props.appState.profilePage.DialosArr} message1 = {props.appState.profilePage.MesagesArr} dispatch1 = {props.dispatch} />} />


                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
