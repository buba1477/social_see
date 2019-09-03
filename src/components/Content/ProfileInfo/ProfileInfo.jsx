import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div className={s.appContent}>
            <div>
                <img src="https://i.pinimg.com/originals/c0/b5/6c/c0b56cf975bae408b480a38f94bcbcee.jpg"></img>

            </div>

            <div className={s.ava}>
                avatar
            </div>

        </div>
    )
};


export default ProfileInfo;