import React, { memo } from 'react';
import { useSelector } from 'react-redux'
import { getDate } from '../../../utils/helpers/getDate';


const HeaderTitle = memo(() => {
    const { searchValue } = useSelector(state => state.pub)
    const currentDate = getDate()
    console.log('HeaderTitle')
    return (
        <div className="header__article">
            <p className="header__title">{searchValue
                ? "Поиск"
                : "Главная"}</p>
            <p className="header__date">{currentDate}</p>
        </div>
    )

}, [])

export default memo(HeaderTitle)