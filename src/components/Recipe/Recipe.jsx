import React from "react";
import './Recipe.scss'

const Recipe = ({recipe}) => {
   return (
   <div className="detail_information-manual">
          <h3 className="detail_information-manual_title">Как готовить</h3>
          <ul>{recipe?.map((recipe, id)=>(
            <li className="detail_information-manual_instruction" key={id}>{recipe}</li>
          ))}
          </ul>
    </div>)

}

export default Recipe