import React, {useContext, useState} from "react";
import { Catigory } from "../../App";
import './Footer.css'


const Footer = () => {
    const [state, setState] = useState('')
    const {setSearchValue} = useContext(Catigory)
    const setValue = (value) => {
        setState(value)
        setSearchValue(value) 
    }
    return (
        <footer className="footer">
            <div className="container">
                <input className="search_input" value = {state} placeholder = 'Поиск' onChange={e => setValue(e.target.value)}/>
            </div>         
        </footer>
    )
}

export default Footer