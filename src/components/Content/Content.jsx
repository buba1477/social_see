import React from 'react';
import s from './Content.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Content = (props) => {

    return (
        <div className={s.appContent}>

            <ProfileInfo />
            <MyPosts mypost = {props.contpost} dispatch={props.dispatch} textareas={props.textareas} />

        </div>
    )
};

export default Content;