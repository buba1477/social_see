import React from 'react';
import s from './Content.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Content = (props) => {
    return (
        <div className={s.appContent}>

            <ProfileInfo />
            <MyPosts mypost = {props.contpost} handRes={props.handRes} textareas={props.textareas} handleText ={props.handleText}/>

        </div>
    )
};

export default Content;