import React from "react";
import './Ingredients.scss'

const Ingrediens = ({ingredients}) => {
  return (
    <div className="detail__information-ingredients">
          <h3 className="detail__information-ingredients__title">Ингредиенты</h3>
          {ingredients?.map((item, id) => (
            <div className="ingredients" key = {id}>
              <span>{item.ingredient}</span>
              <span className="point"></span>
              <span className="quantity">{item.amount} {item.unit}</span>
            </div>
          ))}
        </div>)
}

export default Ingrediens