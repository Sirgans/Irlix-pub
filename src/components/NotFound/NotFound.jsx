import React from "react";
import './NotFound.scss'
import image from '../../assets/notfound.jpg'

const NotFound = () => {
    return (
        <article className='card'> 
            <div className='card__image-wrapper'>
                <img className='card__image' src={image} alt="Ничего не найдено"/>
                <p className="search">Ничего не найдено</p>   
            </div> 
                                                            
            <div className='card__name'>
                <h3 className='card__title'>
                    Пусто
                </h3>
                <h4 className='card__subtitle'>
                    Попробуйте изменить запрос
                </h4>
            </div>  
        </article>
    )
}


export default NotFound