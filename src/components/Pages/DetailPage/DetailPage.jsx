import React from "react";
import { ButtonBack } from "../../ButtonBack";
import { DetailHeader } from "../../DetailHeader";
import { Ingrediens } from "../../Ingredients";
import { Recipe } from "../../Recipe";


const DetailCard = ({ data }) => {
    return (
        <div className="detail">
            <ButtonBack />
            <DetailHeader image={data.image}
                          title={data.title}
                          subtitle={data.subtitle} />
            <Ingrediens ingredients={data.ingredients} />
            <Recipe recipe={data.recipe} />
        </div>)

}


export default DetailCard