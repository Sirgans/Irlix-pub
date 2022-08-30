import { useSelector } from "react-redux"


export const useSelectorsCard = ({}) => {
    const {card, 
    selectCatigory, 
    searchValue, 
    isLoading, 
    detailCard} = useSelector(state => state.pub)
}

