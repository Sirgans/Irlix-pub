import React, { memo } from 'react';
import { Loader } from '../Loader';
import { Card } from './../Card';
import { NotFound } from '../NotFound';
import '../Card/Card.scss'
import { Link } from 'react-router-dom';


const Main = ({ card, isLoading, searchValue }) => {
    return (
        <main className="main">
            <section className='cards'>
                {(!card.length && isLoading) && <Loader />}
                {(!card.length && searchValue) && <NotFound />}
                {card.map(card => (
                    <Link className='card' to={`/Irlix-pub-intensive/${card.id}`}
                        key={card.id}>
                        <Card title={card.title} 
                        image={card.image} 
                        subtitle={card.subtitle} 
                        value={card.value} />
                    </Link>)
                )}
            </section>
        </main>
    )
}

export default memo(Main)
