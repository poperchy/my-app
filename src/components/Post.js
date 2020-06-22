import React from 'react';
import s from '../css/Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.post}>
                <img src="https://cms.qz.com/wp-content/uploads/2016/08/harleyquinn.jpg?quality=75&strip=all&w=1600&h=900"
                     alt=""/>
                     <h3></h3>
                <div>{props.message}</div>
                <div>
                    <span>Like {props.LikesCount}</span>
                </div>
            </div>
        </div>
    );
};

export default Post;