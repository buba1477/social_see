import React from 'react';
import {addPushCreateAction} from './../../../redux/profile-reduxer';
import {addChangeCreateAction} from './../../../redux/profile-reduxer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        mypost: state.dialogsPage.MyPostsArr,
        textareas: state.dialogsPage.newPostText
           }
};

let mapDispathToProps =(dispatch) => {
    return {
        updateNewTextPost: (text) => {
            dispatch(addChangeCreateAction(text));
        },
        hanlerRef: () => {
            dispatch(addPushCreateAction());
        }
    }
};
const MyPostsContainer = connect(mapStateToProps,mapDispathToProps)(MyPosts);

export default MyPostsContainer;