import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { sortedCategory } from '../../../utils/helpers/sortedCategory'
import { setSelectCatigory } from '../../../store/pub/pubSlice';

const HeaderNavbar = () => {
    const dispatch = useDispatch()
    const {card} = useSelector(state => state.pub)
    let sortedArr = sortedCategory(card) 
    
    const [activNavigation, setActiveNavigation] = useState([])

    const onActivNav = (name) => {
        dispatch(setSelectCatigory(name)) 
        setActiveNavigation(name)
    }
    return (
        <ul className={'header__navbar'}>
            {sortedArr?.map(catigory =>{
                return (
                    <li className={
                        activNavigation === catigory
                        ? "header__navbar-button active"
                        : "header__navbar-button"
                    } onClick ={() => onActivNav(catigory)}
                    key={catigory}>{catigory}</li>
                )
            })}
        </ul>
    )
}

export default HeaderNavbar

// const sortedCategory = (context) => {
//     let filterArr = new Set([])

//     context?.forEach(element => {
//         filterArr.add(element.filter[0])
//         filterArr.add(element.filter[1])
//     });

//     const sortedArr = Array.from(filterArr)
//     return sortedArr
// }
