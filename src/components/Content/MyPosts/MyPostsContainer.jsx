import React from 'react';
import {addPushCreateAction} from './../../../redux/profile-reduxer';
import {addChangeCreateAction} from './../../../redux/profile-reduxer';
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
  let state = props.store.getState();
    let hanlerRef = () => {

        props.store.dispatch(addPushCreateAction());
    }


    let onTextChange = (text) => {

        props.store.dispatch(addChangeCreateAction(text));
    }
    return (
        <MyPosts updateNewTextPost={onTextChange}
                 hanlerRef={hanlerRef}
                 mypost={state.dialogsPage.MyPostsArr}
                 textareas = {state.dialogsPage.newPostText}
        />

    )

};

export default MyPostsContainer;