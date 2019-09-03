import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {


    let MyPostsNew = props.mypost.map(
        (posts) => {
            return (<Post message={posts.message} lickesCount={posts.lickesCount}/>)
        }
    );



    let newRefrea = React.createRef();

    let hanlerRef = () => {

        let text = newRefrea.current.value;
        props.handRes(text);
        newRefrea.current.value = '';
    }

    return (
        <div className={s.postHead}>
            <div>
                <textarea ref={newRefrea}></textarea>
            </div>
            <div>
                <button onClick={hanlerRef}>My posts</button>
            </div>
            <div className={s.posts}>

                {MyPostsNew}

            </div>

        </div>

    )

};

export default MyPosts;