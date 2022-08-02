import React, {useContext, useEffect, useState} from 'react';
import Card from './../Card/Card';
import '../Card/Card.css'
import axios from 'axios'
import { Catigory } from '../../App';

const url = 'https://62debc5a9c47ff309e7ae90e.mockapi.io/Cards'

    
const Main = () => {
    const [card, setCard] = useState([])
    const {setContext, selectCatigory, searchValue} = useContext(Catigory)
    
    useEffect(() => {
        axios.get(url).then((response) => {
            setCard(response.data)
            setContext(response.data)
        })
    }, [])
    console.log(card)
    
    return (
        <main className="main">
            <div className="container">   
                <section className='cards'>
                    {!card.length && <div style={{color: 'white'}}>'Идет загрузка'</div>}
                    {card.filter(item => item.filter.includes(selectCatigory))
                            .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map(card =>{
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
