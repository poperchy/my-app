import React from 'react';
import '../css/Main.css';
import Post from "./Posts";
import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./PostsContainer";

const Main = (props) => {

    return (
        <section>
            <ProfileInfo/>
            <PostsContainer store={props.store}/>
        </section>
    );
};

export default Main;