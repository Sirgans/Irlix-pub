import React from 'react';
import { getDate } from '../../../utils/helpers/getDate';

const HeaderTitle = () => {
    const currentDate = getDate()
    return (
        <div className="header__article">
            <p className="header__title">Главная</p>
            <p className="header__date">{currentDate}</p>
        </div>
    )
}

export default HeaderTitle