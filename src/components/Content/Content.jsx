import React from 'react';
import s from './Content.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Content = (props) => {
    return (
        <div className={s.appContent}>

            <ProfileInfo />
            <MyPosts mypost = {props.contpost} handRes={props.handRes}/>

        </div>
    )
};

export default Content;