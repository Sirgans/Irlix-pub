import React, {useState, useContext, useEffect} from 'react';
import { Catigory } from './../../../App';
import {sortedCategory} from '../../../utils/helpers/sortedCategory'

const HeaderNavbar = () => {
    const {context, setSelectCatigory} = useContext(Catigory)
    let sortedArr = sortedCategory(context) 
    
    const [activNavigation, setActiveNavigation] = useState([])

    const onActivNav = (name) => {
        setSelectCatigory(name)
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
