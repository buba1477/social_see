import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {addPushCreateAction} from './../../../redux/state';
import {addChangeCreateAction} from './../../../redux/state';

const MyPosts = (props) => {


    let MyPostsNew = props.mypost.map(
        (posts) => {
            return (<Post message={posts.message} lickesCount={posts.lickesCount}/>)
        }
    );

    

    let hanlerRef = () => {

        props.dispatch(addPushCreateAction());
    }

    let newRefrea = React.createRef();
    let onTextChange = () => {

        let text = newRefrea.current.value;
        props.dispatch(addChangeCreateAction(text));
    }
    return (
        <div className={s.postHead}>
            <div>
                <textarea onChange={onTextChange} ref={newRefrea} value={props.textareas}></textarea>
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