import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortedCategory } from "../../utils/helpers/sortedCategory";
import { setSelectCatigory, selectorCard } from "../../store/pub/pubSlice";
import HeaderTitle from "./Header__title/Header__title";
import HeaderNavbar from "./Header__navbar/Header__navbar";


const HeaderContainer = () => {
    const dispatch = useDispatch()
    const { card, selectCatigory, searchValue } = useSelector(selectorCard)
    const sortedArr = sortedCategory(card)
    const onActivNav = (name) => {
        dispatch(setSelectCatigory(name))
    }

    return (
        <>
            <HeaderTitle searchValue={searchValue} />
            <HeaderNavbar card={card}
                sortedArr={sortedArr}
                selectCatigory={selectCatigory}
                onActivNav={onActivNav} />
        </>
    )


}

export default HeaderContainer