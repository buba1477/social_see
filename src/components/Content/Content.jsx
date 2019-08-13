import React from 'react';
import s from './Content.module.css'
import MyPosts from './MyPosts/MyPosts';

const Content = () => {
    return (
        <div className={s.appContent}>
            <div>
                <img src="https://cdn.wallpapersafari.com/60/61/1njsfA.jpeg" ></img>
            </div>

            <div>
                avatar
                </div>
            <MyPosts />
        </div>
    )
};

export default Content;