import React, {useEffect, useState} from 'react';
import Card from './../Card/Card';
import '../Card/Card.css'
import axios from 'axios'


const url = 'https://62debc5a9c47ff309e7ae90e.mockapi.io/Cards'

    
const Main = () => {
    const [card, setCard] = useState([])
    useEffect(() => {
        axios.get(url).then((response) => {
            setCard(response.data)
        })
    }, [])
    
    if (!card) return null
    
    return (
        <main className="main">
            <div className="container">   
                <section className='cards'>
                    {card.map(card =>{
                        return (
                      <Card key={card.id} title={card.title} image={card.image} subtitle={card.subtitle} value={card.value} />  
                        )
                    })}                                                       
                </section>                         
            </div>
        </main>
        
    )
    
}

export default Main
