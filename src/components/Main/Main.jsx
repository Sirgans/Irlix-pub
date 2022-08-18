
import React, {memo} from 'react';
import Card from './../Card/Card';
import '../Card/Card.css'
import { Link } from 'react-router-dom';


const Main = ({ card, isLoading, searchValue }) => {

    console.log("Main")
    
    return (
        <main className="main">
                <section className='cards'>
                    {(!card.length && isLoading) && <div>'Идет загрузка'</div>}
                    {(!card.length && searchValue) && <div className='search'>Ничего не найдено</div>}
                    {card.map(card => (
                        <Link className='card' to={`/Irlix-pub-intensive/${card.id}`} 
                         key={card.id}>
                        <Card title={card.title} image={card.image} subtitle={card.subtitle} value={card.value} />
                        </Link>)
                    )}
                </section>
        </main>
    )
}

export default memo(Main)
