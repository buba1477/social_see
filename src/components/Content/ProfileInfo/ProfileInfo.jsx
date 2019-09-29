import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div className={s.appContent}>
            <div>
                <img src="https://bipbap.ru/wp-content/uploads/2017/04/1-14.jpg"></img>

            </div>

            <div className={s.ava}>
                avatar
            </div>

        </div>
    )
};


export default ProfileInfo;