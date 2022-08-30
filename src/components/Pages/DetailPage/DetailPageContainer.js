import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../../store/pub/pub.api";
import DetailCard from "./DetailPage";
import {useDispatch, useSelector} from "react-redux";
import {selectorCard} from "../../../store/pub/pubSlice";
import withLoading from "../../../hoc/withLoading";



const DetailCardContainer = () => {
    const { id } = useParams()
    const { detailCard } = useSelector(selectorCard)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(api.getOneCard(id))
    }, [dispatch, id])

    return (
        <WithIsLoadingCardPage data={detailCard} />
    )

}
const WithIsLoadingCardPage = withLoading(DetailCard)
export default DetailCardContainer