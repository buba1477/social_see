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

                    <Route path='/profile' render = {() => <Content contpost = {props.appState.dialogsPage.MyPostsArr} handRes = {props.handRes}/> } />
                    <Route path='/messages' render = {() =>
                        <Dialogs dialong = {props.appState.profilePage.DialosArr} message1 = {props.appState.profilePage.MesagesArr} />} />


                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
