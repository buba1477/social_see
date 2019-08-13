import React from 'react';
import s from './Posts.module.css'

const Post = () => {
    return (
        <div>
            
            <div className={s.items}>
                <img src='https://www.disabilitylawfirmnc.com/wp-content/uploads/2019/04/Raleigh-NC-Personal-Injury-Lawyer-Ava-Lynch-e1556384730871.jpg'></img>
                Post <button>Like!</button>
             </div>
            
        </div>

    )

};

export default Post;