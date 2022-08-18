import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { sortedCategory } from '../../../utils/helpers/sortedCategory'
import { setSelectCatigory } from '../../../store/pub/pubSlice';

const HeaderNavbar = () => {
    const dispatch = useDispatch()
    const {card, selectCatigory} = useSelector(state => state.pub)
    let sortedArr = sortedCategory(card) 
    

    const onActivNav = (name) => {
        dispatch(setSelectCatigory(name)) 
    }
    
    return (
        <ul className={'header__navbar'}>
            {sortedArr?.map(catigory =>{
                return (
                    <li className={
                        catigory === selectCatigory
                        ? "header__navbar-button active"
                        : "header__navbar-button"
                    } onClick ={() => onActivNav(catigory)}
                    key={catigory}>{catigory}</li>
                )
            })}
        </ul>
    )
}
export default memo(HeaderNavbar)
