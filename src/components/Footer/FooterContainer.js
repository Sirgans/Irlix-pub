import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue, selectorCard } from "../../store/pub/pubSlice";
import Footer from "./Footer";

const FooterContainer = () => {
    const { searchValue } = useSelector(selectorCard)
    const dispatch = useDispatch()

    const setValue = (value) => {
        dispatch(setSearchValue(value))
    }
    return (
        <Footer searchValue={searchValue}
            setValue={setValue} />
    )
}

export default FooterContainer