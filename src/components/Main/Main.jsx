<<<<<<< HEAD
import React from 'react';
import Card from './../Card/Card';
import '../Card/Card.css'
import { Link } from 'react-router-dom';

=======
import React, {useContext, useEffect, useState} from 'react';
import Card from './../Card/Card';
import '../Card/Card.css'
import axios from 'axios'
import { Catigory } from '../../App';
>>>>>>> bf27c4393cbe0f60563b70ceef881d0a1225689b


<<<<<<< HEAD
const Main = ({ card, isLoading, searchValue }) => {
=======
    
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
    
>>>>>>> bf27c4393cbe0f60563b70ceef881d0a1225689b
    return (
        <main className="main">
                <section className='cards'>
<<<<<<< HEAD
                    {(!card.length && isLoading) && <div>'Идет загрузка'</div>}
                    {(!card.length && searchValue) && <div className='search'>Ничего не найдено</div>}
                    {card.map(card => (
                        <Link className='card' to={`/Irlix-pub-intensive/${card.id}`} 
                         key={card.id}>
                        <Card title={card.title} image={card.image} subtitle={card.subtitle} value={card.value} />
                        </Link>)
                    )}
                </section>
=======
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
>>>>>>> bf27c4393cbe0f60563b70ceef881d0a1225689b
        </main>

    )

}

export default Main
