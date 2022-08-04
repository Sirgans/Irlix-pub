import React from "react";


const DetailHeader = ({title, subtitle, image}) => {
    <div className="img-info">
        <img className="img-info__product" src={image} />
        <div className="detail_header">
          <h1 className="detail_header__title">{title}</h1>
          <p className="detail_header__subtitle">{subtitle}</p>
        </div>
    </div>
}

export default DetailHeader