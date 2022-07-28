import React, {useState} from 'react';

const navigationCatigory = [
    {
        id: 1,
        name: 'Новинки',
    },
    {
        id: 2,
        name: 'Сладкие',
    },
    {
        id: 3,
        name: 'Хит',
    },
    {
        id: 4,
        name: 'Крепкие'
    }
]
const HeaderNavbar = () => {
    const [activNavigation, setActiveNavigation] = useState([])
    const onActivNav = (id) => {
        setActiveNavigation(id)
    }
    return (
        <ul className={'header__navbar'}>
            {navigationCatigory.map(catigory =>{
                return (
                    <li className={
                        activNavigation === catigory.id
                        ? "header__navbar-button active"
                        : "header__navbar-button"
                    } onClick ={() => onActivNav(catigory.id)}
                    key={catigory.id}>{catigory.name}</li>
                )
            })}
        </ul>
    )
}

export default HeaderNavbar