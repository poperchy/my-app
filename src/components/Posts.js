import React from 'react';
import s from '../css/Posts.module.css';
import Post from "./Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../redux/profile-reducer";


const Posts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} LikesCount={p.LikesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.posts}>
            <div className={s.create}>
                <h3 className={s.title}>My posts</h3>

                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>

                <div className={s.buttons}>
                    <button onClick={onAddPost} className={s.button}>Add post</button>
                    <button className={s.button}>Remove</button>
                </div>

            </div>
            {postsElements}
        </div>
    );
};

export default Posts;