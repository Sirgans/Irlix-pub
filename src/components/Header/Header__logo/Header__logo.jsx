import React from 'react';
import logo from '../../../assets/logo.svg'

const HeaderLogo = () => {
    return (
        <div className="header__logo">
            <a href='#'>
                <img src={logo} alt="Логотип" />
            </a>
        </div>
    )
}

export default HeaderLogo