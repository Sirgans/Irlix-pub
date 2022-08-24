import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../store/pub/pub.api";
import DetailCard from "./DetailPage";


const DetailCardConatiner = () => {
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        api.getOneCard(id).then(data => setData(data))
    }, [id])

    return (
        <DetailCard data={data} />
    )

}

export default DetailCardConatiner