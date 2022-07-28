import React from 'react';
import './Header.css'
import HeaderLogo from './Header__logo/Header__logo';
import HeaderNavbar from './Header__navbar/Header__navbar';
import HeaderTitle from './Header__title/Header__title';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <HeaderTitle></HeaderTitle>               
                <HeaderLogo></HeaderLogo>
                <HeaderNavbar></HeaderNavbar>
            </div>            
        </header>
    );
}

export default Header