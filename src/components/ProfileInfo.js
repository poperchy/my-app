import React from 'react';
import '../css/ProfileInfo.css';

const ProfileInfo = () => {
    return (
        <section className='profileInfo'>
            <img className='profileInfo__img' src="https://sun9-61.userapi.com/c636023/v636023330/3da7e/-zkvMSEm3Gk.jpg"
                 alt=""/>
            <div className='profileInfo__posts'>
                <div className='profileInfo__user-logo'/>
                <div className='profileInfo__info'>
                    <h1 className='profileInfo__name'>Harley Quinn</h1>
                    <ul>
                        <li>Date of bith: <span></span></li>
                        <li>City: <span></span></li>
                        <li>Education: <span></span></li>
                        <li>Web Site:<span></span></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProfileInfo;