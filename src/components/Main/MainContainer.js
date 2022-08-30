import React, { useEffect, memo } from 'react';
import Main from "./Main"
import { api } from '../../store/pub/pub.api';
import { useDispatch, useSelector } from 'react-redux';
import { selectorCard } from '../../store/pub/pubSlice';


const MainContainer = () => {
    const dispatch = useDispatch()
    const { card, isLoading, searchValue, selectCatigory } = useSelector(selectorCard)
    useEffect(() => {
        if (!card.length) dispatch(api.getAllCards())
    }, [])
    const sortedCard = card.filter(item => item.filter.includes(selectCatigory))
        .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))


    return <Main card={sortedCard}
        isLoading={isLoading}
        searchValue={searchValue} />
}


export default memo(MainContainer)