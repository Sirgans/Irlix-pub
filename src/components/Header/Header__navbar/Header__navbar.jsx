import React from 'react';


const HeaderNavbar = ({ sortedArr, selectCatigory, onActivNav}) => {
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
export default HeaderNavbar
