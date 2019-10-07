import React from 'react';
import s from './Content.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Content = (props) => {

    return (
        <div className={s.appContent}>
            <ProfileInfo />
            <MyPostsContainer store ={props.store} />

        </div>
    )
};

export default Content;