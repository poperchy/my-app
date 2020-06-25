import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../redux/profile-reducer";
import Posts from './Posts';

import {connect} from "react-redux";



// const PostsContainer = (props) => {
//
//     // let state = props.store.getState();
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action);
//                 };
//                 return <Posts updateNewPostText={onPostChange}
//                               addPost={addPost}
//                               posts={state.profilePage.postData}
//                               newPostText={state.profilePage.newPostText}/>
//
//             }
//             }
//         </StoreContext.Consumer>
//     );
// };

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
           dispatch(addPostActionCreator());
        },
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;