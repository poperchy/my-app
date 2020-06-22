import React from 'react';
import '../css/Friends.css';
import FriendsPhoto from "./FriendsPhoto";


const Friends = (props) => {

    let friendsPhoto = props.state.friendsName.map(photo =>
        <FriendsPhoto id={photo.id} src={photo.src} name={photo.name}/>);
    // let friendsName = props.state.friendsName.map(name => <FriendsPhoto src={friendsPhoto.src} name={name.name}/>);

    return (
        <div className='friends'>
            <div className='friends__wrap'>
                {friendsPhoto}
            </div>
        </div>
    );
};

export default Friends;