import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div className={s.appContent}>
            <div>
                <img src="http://kaifolog.ru/uploads/posts/2016-11/1480227668_00_1.jpg"></img>

            </div>

            <div className={s.ava}>
                avatar
            </div>

        </div>
    )
};


export default ProfileInfo;