import React from 'react';
import s from './Posts.module.css'

const Post = (props) => {
    return (
        <div>

            <div className={s.items}>
                <img
                    src='https://www.disabilitylawfirmnc.com/wp-content/uploads/2019/04/Raleigh-NC-Personal-Injury-Lawyer-Ava-Lynch-e1556384730871.jpg'></img>
                <div>
                {props.message}
                </div>
                <div className={s.button}>
                    <button>Like! {props.lickesCount}</button>
                </div>
            </div>

        </div>

    )

};

export default Post;