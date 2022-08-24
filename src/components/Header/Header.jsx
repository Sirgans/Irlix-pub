import React from 'react';
import './Header.scss'
import HeaderContainer from './headerContainer';
import HeaderLogo from './Header__logo/Header__logo';


const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <HeaderContainer />              
                <HeaderLogo />
            </div>            
        </header>
    );
}

export default Header