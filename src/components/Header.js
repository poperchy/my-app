import React from 'react';
import '../css/Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <img className='header__logo'
                     src="https://owl.excelsior.edu/wp-content/uploads/sites/2/2020/03/game_over_PNG57-300x300.png"
                     alt="alahotbar"/>
            </div>
        </header>
    );
};

export default Header;