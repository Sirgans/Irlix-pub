import React from 'react';
import './Card.css'



const Card = ({image, title, subtitle, value}) => {
    return (
        <article className='card'> 
            <div className='card__image-wrapper'>
                <img className='card__image' src={require(`../../assets/product/${image}`)} alt="Изображение напитка"/>  
            </div>                                                  
            <div className='card__name'>
                <h3 className='card__title'>
                    {title}
                </h3>
                <h4 className='card__subtitle'>
                    {subtitle}
                </h4>
            </div>  
            <div className='card__information'>
                <p className='card__information-value'>{value}</p>
                <p className='card__information-title'>Алкоголь</p>
            </div>          
        </article>
    )
}


export default Card