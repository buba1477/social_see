import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Classnav/Classnav';
import Content from './components/Content/Content';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialosg/DialogsContainer";
import UserContainer from "./components/Users/UserContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wripper'>
                <Header/>
                <Nav/>
                <div className='app-wripper-content'>

                    <Route path='/profile' render = {() => <Content  /> } />
                    <Route path='/messages' render = {() => <DialogsContainer />} />
                    <Route path='/users' render = {() => <UserContainer />} />

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
