import React, { memo } from 'react';
import Get from '../../../utils/helpers/getDate';


const HeaderTitle = memo(({ searchValue }) => {
    return (
        <div className="header__article">
            <p className="header__title">{searchValue
                ? "Поиск"
                : "Главная"}</p>
            <Get />
        </div>
    )

})

export default memo(HeaderTitle)