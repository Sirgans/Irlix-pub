import React, {useEffect, useState} from "react";
import { api } from "../store/pub/pub.api";
import ButtonBack from "./ButtonBack/ButtonBack";
import DetailHeader from "./DetailHeader/DetailHeader";
import Ingrediens from "./Ingredients/Ingedients";
import Recipe from "./Recipe/Recipe";
import { useParams } from "react-router-dom"


const DetailCard = () => {
    const {id} = useParams()
    const [data, setData] = useState([])
    
    useEffect(()=> {
        api.getOneCard(id).then(data => setData(data))
      }, [id])
    
    return(
        
    <div className="detail">
        <ButtonBack />
        <DetailHeader image={data.image} title={data.title} subtitle={data.subtitle} />
        <Ingrediens ingredients={data.ingredients}/>
        <Recipe recipe={data.recipe}/>
    </div>)

}


export default DetailCard