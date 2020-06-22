import React from 'react';
import '../css/Friends.css';


const FriendsPhoto = (props) => {

    return (
        <div className='friends__item'>
                <img className='friends__img' src={props.src} alt=""/>
                <h3>{props.name}</h3>
        </div>
    );
};

export default FriendsPhoto;